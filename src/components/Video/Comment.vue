<script setup lang="ts">
import { computed, ref } from 'vue'
import { CommentData } from '@/data/Video'
import type { RootComment as VideoRootComment } from '@/types/Video'
import { formatNumber } from '@/utils/time'
import CommentItem from '@/components/Video/CommentItem.vue'
import CommentEditor from '@/components/Video/CommentEditor.vue'
import type {
    ChildCommentNode,
    RootCommentNode
} from '@/components/Video/commentTypes'

type SortType = 'hot' | 'new'

const sortType = ref<SortType>('hot')
// 记录是否发生过排序切换：切换前新评论固定展示在第一位
const hasSwitchedSort = ref(false)
const pendingComment = ref('')
const activeReplyBoxId = ref<string | null>(null)
const pendingReply = ref('')

/**
 * 将后端/静态评论数据标准化为前端可交互结构
 */
function normalizeComments(source: VideoRootComment[]): RootCommentNode[] {
    return source.map((item, index) => ({
        id: `root-${index}-${item.time}`,
        topped: item.topped,
        time: item.time,
        userName: item.userName,
        text: item.text,
        likeCount: item.likeCount,
        isLiked: false,
        isLocalNew: false,
        children:
            item.children?.map((child, childIndex) => ({
                id: `child-${index}-${childIndex}-${child.time}`,
                time: child.time,
                userName: child.userName,
                text: child.text,
                likeCount: child.likeCount,
                isLiked: false
            })) ?? null
    }))
}

const comments = ref<RootCommentNode[]>(normalizeComments(CommentData.comments))

/**
 * 统计总评论数（主评论 + 子评论）
 */
const commentCount = computed(() => {
    return comments.value.reduce((count, current) => {
        return count + 1 + (current.children?.length ?? 0)
    }, 0)
})

const displayedComments = computed(() => {
    // 置顶评论始终优先展示
    const toppedComments = comments.value.filter((item) => item.topped)
    const normalComments = comments.value.filter((item) => !item.topped)

    const sortedNormal = [...normalComments].sort((a, b) => {
        if (sortType.value === 'new') {
            return b.time - a.time
        }

        if (b.likeCount !== a.likeCount) {
            return b.likeCount - a.likeCount
        }
        return b.time - a.time
    })

    // 在用户真正切换排序前，最新发布的本地评论固定显示在最前面
    if (!hasSwitchedSort.value) {
        const localNewComments = comments.value
            .filter((item) => item.isLocalNew)
            .sort((a, b) => b.time - a.time)

        const localIds = new Set(localNewComments.map((item) => item.id))
        const remainingComments = [
            ...toppedComments,
            ...sortedNormal.filter((item) => !localIds.has(item.id))
        ]

        return [...localNewComments, ...remainingComments]
    }

    return [...toppedComments, ...sortedNormal]
})

/**
 * 处理排序按钮点击，并记录是否发生过排序切换
 */
function handleSortTypeClick(nextType: SortType) {
    if (nextType !== sortType.value) {
        hasSwitchedSort.value = true
    }
    sortType.value = nextType
}

/**
 * 发布评论：去空白、插入列表、清空输入框
 */
function handlePublishComment() {
    const text = pendingComment.value.trim()
    if (!text) return

    comments.value.unshift({
        id: `root-new-${Date.now()}`,
        topped: false,
        time: Date.now(),
        userName: '我',
        text: [text],
        likeCount: 0,
        isLiked: false,
        isLocalNew: true,
        children: null
    })

    pendingComment.value = ''
}

/**
 * 点赞开关：二次点击取消点赞
 */
function handleToggleLike(target: ChildCommentNode) {
    target.isLiked = !target.isLiked
    target.likeCount = target.isLiked
        ? target.likeCount + 1
        : target.likeCount - 1
}

/**
 * 生成回复框唯一标识
 */
function getReplyBoxId(rootId: string, childId?: string) {
    return childId ? `${rootId}::${childId}` : rootId
}

/**
 * 展开/收起回复框；子评论默认带“回复@用户名：”前缀
 */
function handleReplyClick(root: RootCommentNode, child?: ChildCommentNode) {
    const boxId = getReplyBoxId(root.id, child?.id)
    if (activeReplyBoxId.value === boxId) {
        activeReplyBoxId.value = null
        pendingReply.value = ''
        return
    }

    activeReplyBoxId.value = boxId
    pendingReply.value = child ? `回复@${child.userName}：` : ''
}

/**
 * 发送回复，统一追加到一级评论的子评论列表
 */
function handlePublishReply(root: RootCommentNode) {
    const text = pendingReply.value.trim()
    if (!text) return

    if (!root.children) {
        root.children = []
    }

    root.children.unshift({
        id: `child-new-${Date.now()}`,
        time: Date.now(),
        userName: '我',
        text: [text],
        likeCount: 0,
        isLiked: false
    })

    activeReplyBoxId.value = null
    pendingReply.value = ''
}

/**
 * 子组件更新回复输入内容
 */
function handlePendingReplyUpdate(value: string) {
    pendingReply.value = value
}

/**
 * 转发子组件的回复点击事件
 */
function handleCommentItemReplyClick(payload: {
    root: RootCommentNode
    child?: ChildCommentNode
}) {
    handleReplyClick(payload.root, payload.child)
}
</script>

<template>
    <section class="comment">
        <div class="comment-header">
            <h3 class="comment-title">评论 {{ formatNumber(commentCount) }}</h3>
            <div class="comment-sort">
                <button
                    class="sort-btn"
                    :class="{ active: sortType === 'hot' }"
                    type="button"
                    @click="handleSortTypeClick('hot')"
                >
                    按热度
                </button>
                <button
                    class="sort-btn"
                    :class="{ active: sortType === 'new' }"
                    type="button"
                    @click="handleSortTypeClick('new')"
                >
                    按时间
                </button>
            </div>
        </div>

        <div class="comment-publish">
            <CommentEditor
                v-model="pendingComment"
                placeholder="发一条友善评论见证当下"
                button-text="发布评论"
                min-height="88px"
                :disabled="!pendingComment.trim()"
                @submit="handlePublishComment"
            />
        </div>

        <div class="comment-list">
            <CommentItem
                v-for="item in displayedComments"
                :key="item.id"
                :item="item"
                :root-comment="item"
                :reply-target-id="activeReplyBoxId"
                :pending-reply="pendingReply"
                :get-reply-box-id="getReplyBoxId"
                @toggle-like="handleToggleLike"
                @reply-click="handleCommentItemReplyClick"
                @publish-reply="handlePublishReply"
                @update:pendingReply="handlePendingReplyUpdate"
            />
        </div>

        <div class="comment-no-more">没有更多评论</div>
    </section>
</template>

<style scoped>
.comment {
    margin-top: 18px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.comment-title {
    font-size: 20px;
    line-height: 1;
    font-weight: 500;
}

.comment-sort {
    display: flex;
    gap: 8px;
}

.sort-btn {
    border: 1px solid var(--color-gray-3);
    border-radius: 14px;
    padding: 4px 10px;
    background: white;
    color: var(--color-gray-1);
    cursor: pointer;
}

.sort-btn.active {
    border-color: var(--color-acfun);
    color: var(--color-acfun);
}

.comment-publish {
    margin-top: 12px;
}

.comment-list {
    margin-top: 10px;
}

.comment-no-more {
    margin-top: 12px;
    text-align: center;
    color: var(--color-gray-1);
    font-size: 13px;
}
</style>

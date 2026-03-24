<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { formatNumber, formatRelativeTime } from '@/utils/time'
import type { ChildCommentNode, RootCommentNode } from './commentTypes'
import CommentEditor from './CommentEditor.vue'

defineOptions({
    name: 'CommentItem'
})

const props = withDefaults(
    defineProps<{
        item: RootCommentNode | ChildCommentNode
        rootComment: RootCommentNode
        isChild?: boolean
        replyTargetId: string | null
        pendingReply: string
        getReplyBoxId: (rootId: string, childId?: string) => string
    }>(),
    {
        isChild: false
    }
)

const emit = defineEmits<{
    (event: 'toggle-like', target: RootCommentNode | ChildCommentNode): void
    (
        event: 'reply-click',
        payload: { root: RootCommentNode; child?: ChildCommentNode }
    ): void
    (event: 'publish-reply', root: RootCommentNode): void
    (event: 'update:pendingReply', value: string): void
}>()

const pendingReplyProxy = computed({
    get: () => props.pendingReply,
    set: (value: string) => emit('update:pendingReply', value)
})

const isRootComment = computed(() => !props.isChild)
const rootItem = computed(() => props.rootComment)
const childItem = computed(() =>
    props.isChild ? (props.item as ChildCommentNode) : undefined
)
const isReplyBoxVisible = computed(() => {
    return (
        props.replyTargetId ===
        props.getReplyBoxId(rootItem.value.id, childItem.value?.id)
    )
})

const hasChildren = computed(() => {
    if (!isRootComment.value) return false
    return !!(props.item as RootCommentNode).children?.length
})

// 子评论收起/展开：当子评论数量较多时，默认只展示前 4 条
const isChildrenExpanded = ref(false)
const childrenList = computed(
    () => (props.item as RootCommentNode).children ?? []
)
const childrenCount = computed(() => childrenList.value.length)
const shouldCollapseChildren = computed(
    () => isRootComment.value && childrenCount.value >= 4
)

watch(childrenCount, (count) => {
    // 子评论数量变少时，回到默认收起状态，避免组件状态“记住展开”
    if (count < 4) isChildrenExpanded.value = false
})
const displayedChildren = computed(() => {
    if (!shouldCollapseChildren.value) return childrenList.value
    if (isChildrenExpanded.value) return childrenList.value
    return childrenList.value.slice(0, 4)
})

function handleToggleLike() {
    emit('toggle-like', props.item)
}

function handleReplyClick() {
    emit('reply-click', { root: rootItem.value, child: childItem.value })
}

function handlePublishReply() {
    emit('publish-reply', rootItem.value)
}
</script>

<template>
    <article class="comment-item" :class="{ 'is-child': isChild }">
        <header class="item-header">
            <div class="item-user">
                <span class="user-name">{{ item.userName }}</span>
                <span
                    v-if="isRootComment && (item as RootCommentNode).topped"
                    class="topped-tag"
                >
                    置顶
                </span>
            </div>
        </header>

        <p class="item-text">
            {{ item.text.join('\n') }}
        </p>

        <div class="item-meta">
            <div class="item-time">{{ formatRelativeTime(item.time) }}</div>

            <div class="item-actions">
                <button
                    class="action-btn"
                    :class="{ active: item.isLiked }"
                    type="button"
                    @click="handleToggleLike"
                >
                    <span
                        class="action-like-icon"
                        :class="
                            item.isLiked
                                ? 'action-like-icon-liked'
                                : 'action-like-icon-unliked'
                        "
                    ></span>
                    点赞 {{ formatNumber(item.likeCount) }}
                </button>
                <button
                    class="action-btn action-reply-btn"
                    type="button"
                    @click="handleReplyClick"
                >
                    回复
                </button>
            </div>
        </div>

        <div v-if="isReplyBoxVisible" class="reply-box">
            <CommentEditor
                v-model="pendingReplyProxy"
                placeholder="写下你的回复"
                button-text="发送回复"
                :disabled="!pendingReplyProxy.trim()"
                @submit="handlePublishReply"
            />
        </div>

        <div v-if="hasChildren" class="children-wrapper">
            <div class="children-list">
                <CommentItem
                    v-for="child in displayedChildren"
                    :key="child.id"
                    :item="child"
                    :root-comment="rootItem"
                    :is-child="true"
                    :reply-target-id="replyTargetId"
                    :pending-reply="pendingReply"
                    :get-reply-box-id="getReplyBoxId"
                    @toggle-like="emit('toggle-like', $event)"
                    @reply-click="emit('reply-click', $event)"
                    @publish-reply="emit('publish-reply', $event)"
                    @update:pendingReply="emit('update:pendingReply', $event)"
                />
            </div>

            <button
                v-if="shouldCollapseChildren"
                type="button"
                class="children-toggle-btn"
                :aria-expanded="isChildrenExpanded"
                @click="isChildrenExpanded = !isChildrenExpanded"
            >
                {{ isChildrenExpanded ? '收起' : '查看更多' }}
            </button>
        </div>
    </article>
</template>

<style scoped>
.comment-item {
    border-bottom: 1px solid var(--color-gray-3);
    padding: 14px 0;
}

.comment-item.is-child {
    border-bottom: none;
    padding: 8px 0;
}

.comment-item.is-child + .comment-item.is-child {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--color-gray-3);
}

.item-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.item-user {
    display: flex;
    align-items: center;
    gap: 8px;
}

.user-name {
    color: var(--color-gray-0);
    font-size: 14px;
    font-weight: 500;
}

.topped-tag {
    font-size: 12px;
    color: var(--color-acfun);
    border: 1px solid var(--color-acfun);
    border-radius: 10px;
    line-height: 1;
    padding: 3px 8px;
}

.item-meta {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 14px;
}

.item-time {
    color: var(--color-gray-1);
    font-size: 12px;
}

.item-text {
    margin-top: 8px;
    line-height: 1.6;
    font-size: 14px;
    color: var(--color-gray-0);
    white-space: pre-wrap;
}

.item-actions {
    display: flex;
    align-items: center;
    gap: 14px;
}

.action-btn {
    border: none;
    background: transparent;
    color: var(--color-gray-1);
    padding: 0;
    cursor: pointer;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.action-btn.active,
.action-btn:hover {
    color: var(--color-acfun);
}

.action-like-icon {
    width: 14px;
    height: 14px;
    background-color: currentColor;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
}

.action-like-icon-unliked {
    mask-image: url('/icons/video/comment/Like.svg');
    -webkit-mask-image: url('/icons/video/comment/Like.svg');
}

.action-like-icon-liked {
    mask-image: url('/icons/video/comment/Liked.svg');
    -webkit-mask-image: url('/icons/video/comment/Liked.svg');
}

.reply-box {
    margin-top: 10px;
}

.children-wrapper {
    margin-top: 10px;
    margin-left: 28px;
    border-radius: 8px;
    padding: 8px 12px;
}

.children-toggle-btn {
    position: static;
    border: 0;
    background: transparent;
    padding: 6px 0 0;
    cursor: pointer;
    color: var(--color-acfun);
    font-size: 13px;
    line-height: 1;
    user-select: none;
}

.children-toggle-btn:hover {
    text-decoration: underline;
}
</style>

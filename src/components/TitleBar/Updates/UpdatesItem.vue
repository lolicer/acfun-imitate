<script lang="ts" setup>
import { drawThumbnail } from '@/utils/canvas';
import { formatRelativeTime } from '@/utils/time';
import { Updates } from '@/types/Updates';
import { nextTick, onMounted, ref } from 'vue';

const props = defineProps<{
    data: Updates
}>();

const titleRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (titleRef.value) {
        // 判断文本是否溢出
        if(titleRef.value.scrollHeight > titleRef.value.clientHeight + 1) { // 由于css设置行高为16.5px（非整数），导致标题为两行但未超过时存在误差
            tooltip.value = props.data.title
        }
    }
}

const coverCanvasRef = ref<HTMLCanvasElement>(null)

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
    drawThumbnail(coverCanvasRef.value, props.data.coverUrl, 100, 52)
})
</script>

<template>
    <div class="content">
        <div class="avatar">
            <img :src="props.data.avatarUrl" alt="头像">
        </div>
        <div class="info">
            <div class="uploader">{{ props.data.uploader }}</div>
            <div>
                <div ref="titleRef" class="title" :title="tooltip">
                    <span v-if="props.data.type === 'article'" class="article-mark">文章</span>
                    {{ props.data.title }}
                </div>
                <div class="release-time">{{ formatRelativeTime(props.data.releaseTime) }}</div>
            </div>
        </div>
        <div class="cover">
            <div></div>
            <canvas ref="coverCanvasRef" class="cover-canvas" alt="ceshi" width="100" height="52"></canvas>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    padding: 10px;
    height: 71px;
}

.avatar {
    flex: 3;
}
.avatar > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    /* padding-left: 10px; 这一行可以渲染出拨片效果，非常有趣*/
    margin-left: 6px;
}
.avatar > img:hover {
    cursor: pointer;
}

.info {
    flex: 8;
}
.uploader {
    -webkit-line-clamp: 2;
    line-clamp: 1;
    overflow: hidden;
    
    font-size: 13px;
    color: var(--color-gray-0);
}
.title {
    /* 控制超出两行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 13px;
    line-height: 18px;
    /* height: 36px; */
}
.title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
.article-mark {
    display: inline-block; /* 改为行内块元素 */
    border: 1px solid var(--color-acfun);
    border-radius: 2px;
    padding: 0 3px; /* 添加内边距 */
    margin-right: 2px; /* 与标题文字的间距 */
    font-size: 11px; /* 稍微调小字体 */
    color: var(--color-acfun); /* 文字颜色与边框一致 */
    line-height: 15px; /* 固定行高 */
}
.release-time {
    font-size: 11px;
    color: var(--color-gray-0);
}

.cover {
    flex: 5;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.cover:hover {
    cursor: pointer;
}
.cover-canvas {
    margin-top: auto;
    min-width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
</style>
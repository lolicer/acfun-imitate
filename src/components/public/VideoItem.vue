 <script lang="ts" setup>
import Up from '@/assets/icons/concise/Up.vue';
import VideoItem from '@/types/VideoItem';
import { formatTimestampToDate } from '@/utils/time';
import { nextTick, onMounted, ref } from 'vue';
const props = defineProps<{
    data: VideoItem
}>()

const titleRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
  if (titleRef.value) {
    // 判断文本是否溢出
    if(titleRef.value.scrollHeight > titleRef.value.clientHeight) {
        tooltip.value = props.data.title
    console.log(props.data.title, titleRef.value, titleRef.value.scrollHeight, titleRef.value.clientHeight)
    }
  }
}

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
})
</script>

<template>
    <div id="video-item-content">
        <div id="cover">
            <img :src="props.data.coverUrl" alt="">
        </div>
        <div id="info">
            <span id="title" ref="titleRef" :title="tooltip">{{ props.data.title }}</span>
            <div id="info-line-2">
                <div id="up">
                    <Up id="up-icon"/>
                    <span id="up-name">{{ props.data.up }}</span>
                </div>
                <span id="release-time">·{{ formatTimestampToDate(props.data.releaseTime) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#video-item-content {
    display: inline-block;
    min-width: 256px;
    aspect-ratio: 20 / 17;
    box-sizing: border-box;
}
#cover {
    width: 100%;
}
#cover:hover {
    cursor: pointer;
}
#cover > img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 4px;
}
#title {
    /* 控制超出两行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 20px;
    height: 40px;
    font-size: 15px;
}
#title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
#info-line-2 {
    display: flex;
    line-height: 16px;
}
#info-line-2:hover {
    cursor: pointer;
    * {
        color: var(--color-acfun);
    }
}
#up {
    display: flex;
    align-items: center;
}
#up-icon {
    color: var(--color-gray-1);
    transform: translateY(2px);
}
#up-name {
    font-size: 13px;
    padding-left: 4px;
    color: var(--color-gray-1);
}
#release-time {
    font-size: 13px;
    color: var(--color-gray-1);
}
</style>
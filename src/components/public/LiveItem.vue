 <script lang="ts" setup>
import Up from '@/assets/icons/concise/Up.vue';
import Like from '@/assets/icons/concise/Like.vue';
import People from '@/assets/icons/concise/People.vue';
import LiveItem from '@/types/LiveItem';
import { formatNumber } from '@/utils/time';
import { nextTick, onMounted, ref } from 'vue';
const props = defineProps<{
    data: LiveItem
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
    <div id="live-item-content">
        <div id="cover">
            <img :src="props.data.coverUrl" alt="">
            <div id="cover-overlay"></div>
            <div id="cover-info">
                <span id="cover-info-tag">
                    {{ props.data.tag }}
                </span>
                <div id="cover-info-like">
                    <Like/>
                    <span>{{ formatNumber(props.data.likeCount) }}</span>
                </div>
                <div id="cover-info-audience-count">
                    <People/>
                    <span>{{ formatNumber(props.data.audienceCount) }}</span>
                </div>
            </div>
        </div>
        <div id="info">
            <div id="info-avatar">
                <img :src="props.data.avatarUrl" alt="">
            </div>
            <div id="info-right">
                <span id="title" ref="titleRef" :title="tooltip">{{ props.data.title }}</span>
                <div id="info-line-2">
                    <div id="up">
                        <Up id="up-icon"/>
                        <span id="up-name">{{ props.data.up }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#live-item-content {
    display: inline-block;
    min-width: 186px;
    aspect-ratio: 20 / 17;
    box-sizing: border-box;
}
#cover {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
#cover:hover {
    cursor: pointer;
}
#cover-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );
}
#cover > img {
    width: 100%;
    object-fit: cover;
}
#cover-info {
    position: absolute;
    bottom: 6px;
    display: flex;
    color: white;
    box-sizing: border-box;
    padding: 0 8px;
    width: 100%;
}
#cover-info > div {
    display: flex;
    align-items: center;
    font-size: 12.5px;
}
#cover-info-tag {
    margin-right: auto;
    font-size: 14.5px;
}
#cover-info-like {
    margin-right: 8px;
}
#cover-info-like > span {
    transform: translateY(-1px);
    margin-left: 1px;
}
#cover-info-audience-count > span {
    transform: translateY(-1px);
    margin-left: 1px;
}

#info {
    display: flex;
    margin-top: 4px;
}
#info-avatar {
    flex: 9;
}
#info-avatar > img {
    width: 100%;
    border-radius: 50%;
}
#info-right {
    flex:64;
    box-sizing: border-box;
    padding-left: 10px;
}
#title {
    /* 控制超出一行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 20px;
    height: 20px;
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
</style>
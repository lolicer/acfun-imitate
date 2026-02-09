<script lang="ts" setup>
import { formatRelativeTime } from '@/utils/time'
import { drawThumbnail } from '@/utils/canvas'
import { LiveHistoryInfo } from '@/types/HistoryInfo'
import { nextTick, onMounted, ref } from 'vue'
import TruncatedText from '@/components/public/TruncatedText.vue'

const props = defineProps<{
    data: LiveHistoryInfo
}>()

// 准备将原图绘制成缩略图
const coverCanvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    nextTick(() => {})
    drawThumbnail(coverCanvasRef.value, props.data.imgUrl)
})
</script>

<template>
    <div class="live-item-content">
        <div class="cover">
            <!-- <img :src="props.data.imgUrl" alt="测试图片"> -->
            <canvas
                ref="coverCanvasRef"
                class="cover-canvas"
                alt="ceshi"
                width="124"
                height="63"
            ></canvas>
            <div
                class="live-status live-status-true"
                v-if="props.data.isLiveOn === true"
            >
                直播中
            </div>
            <div class="live-status live-status-false" v-else>未开播</div>
        </div>
        <div class="info">
            <TruncatedText
                class="title"
                :text="props.data.title"
                :max-line="2"
            />
            <div class="line-2">
                <img
                    src="/icons/public/titleBar/history/DevicePC.svg"
                    class="device-icon"
                    v-if="props.data.device === 'pc'"
                />
                <img
                    src="/icons/public/titleBar/history/DeviceMobile.svg"
                    class="device-icon"
                    v-if="props.data.device === 'mobile'"
                />
                <span class="watching-time">{{
                    formatRelativeTime(props.data.time)
                }}</span>
            </div>
            <div class="line-3">
                <img src="/icons/public/Up.svg" class="uploader-icon" />
                <span class="uploader-name">{{ props.data.uploader }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.live-item-content {
    display: flex;
    padding: 10px;
}
.live-item-content > div {
    height: 63px;
}
.cover {
    flex: 4;

    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 112px;

    position: relative;
}
.cover:hover {
    cursor: pointer;
}
.cover-canvas {
    min-width: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.live-status {
    position: absolute;
    top: 3px;
    right: 3px;
    border-radius: 4px;

    font-size: 10px;
    color: white;
    line-height: 14px;
    padding-top: 1px;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 1px;
}
.live-status-false {
    background-color: var(--color-gray-1-transparent);
}
.live-status-true {
    background-color: var(--color-acfun-transparent);
}

.info {
    flex: 6;
    box-sizing: border-box;
    padding-left: 10px;
}
.title {
    font-size: 13px;
    line-height: 16.5px;
    height: 33px;
}
.title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}

.line-2 {
    height: 15px;
    display: flex;
    align-items: center;
}
.device-icon {
    width: 14px;
    height: 14px;
}
.watching-time {
    font-size: 11px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: var(--color-gray-1);
}
.watching-time:hover {
    cursor: default;
}

.line-3 {
    height: 15px;
    display: flex;
    align-items: center;
}
.uploader-icon {
    width: 15px;
    height: 15px;
}
.uploader-name {
    font-size: 12px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: var(--color-gray-1);
}
.uploader-name:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
</style>

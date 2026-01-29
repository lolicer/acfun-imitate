<script lang="ts" setup>
import { formatRelativeTime } from '@/utils/time'
import { drawThumbnail } from '@/utils/canvas'
import DeviceMobile from '@/assets/icons/concise/DeviceMobile.vue'
import DevicePC from '@/assets/icons/concise/DevicePC.vue'
import Up from '@/assets/icons/concise/Up.vue'
import { ArticleHistoryInfo } from '@/types/HistoryInfo'
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps<{
    data: ArticleHistoryInfo
}>()

const titleRef = ref<HTMLElement>(null)
const tooltip = ref('')

const checkOverflow = () => {
    if (titleRef.value) {
        // 判断文本是否溢出
        if (titleRef.value.scrollHeight > titleRef.value.clientHeight + 1) {
            // 由于css设置行高为16.5px（非整数），导致标题为两行但未超过时存在误差
            tooltip.value = props.data.title
            console.log(
                props.data.title,
                titleRef.value,
                titleRef.value.scrollHeight,
                titleRef.value.clientHeight
            )
        }
    }
}

// 准备将原图绘制成缩略图
const coverCanvasRef = ref<HTMLCanvasElement>(null)

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })

    // if(coverCanvasRef.value){
    //     const ctx = coverCanvasRef.value.getContext('2d')
    //     const img = new Image()
    //     img.onload = function() {
    //     // 将图片绘制到指定大小的canvas上
    //     ctx.drawImage(img, 0, 0, 124, 63);
    //     }
    //     img.src = props.data.imgUrl
    // }
    drawThumbnail(coverCanvasRef.value, props.data.imgUrl)
})
</script>

<template>
    <div class="article-item-content">
        <div id="info">
            <div ref="titleRef" class="title" :title="tooltip">
                {{ props.data.title }}
            </div>
            <div id="line-2">
                <DevicePC
                    class="device-icon"
                    v-if="props.data.device === 'pc'"
                />
                <DeviceMobile
                    class="device-icon"
                    v-if="props.data.device === 'mobile'"
                />
                <span id="watching-time">{{
                    formatRelativeTime(props.data.time)
                }}</span>
            </div>
            <div id="line-3">
                <Up id="uploader-icon" />
                <span id="uploader-name">{{ props.data.uploader }}</span>
            </div>
        </div>
        <div id="cover">
            <!-- <img :src="props.data.imgUrl" alt="测试图片"> -->
            <canvas
                ref="coverCanvasRef"
                class="cover-canvas"
                alt="ceshi"
                width="124"
                height="63"
            ></canvas>
        </div>
    </div>
</template>

<style scoped>
.article-item-content {
    display: flex;
    padding: 10px;
}
.article-item-content > div {
    height: 63px;
}
#cover {
    flex: 4;

    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 112px;
    padding-left: 10px;

    position: relative;
}
#cover:hover {
    cursor: pointer;
}
.cover-canvas {
    min-width: 100%;
    object-fit: cover;
    border-radius: 5px;
}

#info {
    flex: 6;
    box-sizing: border-box;
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
    line-height: 16.5px;
    height: 33px;
}
.title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}

#line-2 {
    height: 15px;
    display: flex;
    align-items: center;
}
.device-icon {
    width: 14px;
    height: 14px;
    color: var(--color-gray-1);
}
#watching-time {
    font-size: 11px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: var(--color-gray-1);
}
#watching-time:hover {
    cursor: default;
}

#line-3 {
    height: 15px;
    display: flex;
    align-items: center;
}
#uploader-icon {
    width: 15px;
    height: 15px;
    color: var(--color-gray-1);
}
#uploader-name {
    font-size: 12px;
    line-height: 15px;
    transform: translateY(-1px);
    margin-left: 4px;
    color: var(--color-gray-1);
}
#uploader-name:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
</style>

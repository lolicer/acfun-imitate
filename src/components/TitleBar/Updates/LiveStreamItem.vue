<script lang="ts" setup>
import { drawThumbnail } from '@/utils/canvas'
import { LiveStreamer } from '@/types/Updates'
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps<{
    data: LiveStreamer
}>()

const nameRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (nameRef.value) {
        // 判断文本是否溢出
        if (nameRef.value.scrollHeight > nameRef.value.clientHeight) {
            tooltip.value = props.data.name
        }
    }
}

const avatarCanvasRef = ref<HTMLCanvasElement>(null)
onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
    drawThumbnail(avatarCanvasRef.value, props.data.avatarUrl, 44, 44)
})
</script>

<template>
    <div class="content">
        <div class="avatar">
            <canvas
                ref="avatarCanvasRef"
                class="avatar-canvas"
                alt="ceshi"
                width="44"
                height="44"
            ></canvas>
        </div>
        <span ref="nameRef" class="name">{{ props.data.name }}</span>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    width: 64px;
    height: 100px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.content:hover {
    cursor: pointer;
    .name {
        color: var(--color-acfun);
    }
}
.avatar {
    width: 64px;
    display: flex;
    justify-content: center;
}
.avatar-canvas {
    box-sizing: border-box;
    border-radius: 50%;
    padding: 2px;
    border: 3px solid var(--color-acfun);
}
.name {
    /* 控制超出两行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;

    width: 100%;
    height: 34px;
    font-size: 12px;
}
</style>

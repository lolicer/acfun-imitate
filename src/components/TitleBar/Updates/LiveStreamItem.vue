<script lang="ts" setup>
import { drawThumbnail } from '@/utils/canvas'
import { LiveStreamer } from '@/types/Updates'
import { nextTick, onMounted, ref } from 'vue'
import TruncatedText from '@/components/public/TruncatedText.vue'

const props = defineProps<{
    data: LiveStreamer
}>()

const avatarCanvasRef = ref<HTMLCanvasElement>(null)
onMounted(() => {
    nextTick(() => {})
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
        <TruncatedText class="name" :text="props.data.name" :max-line="2" />
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
    text-align: center;

    width: 100%;
    height: 34px;
    font-size: 12px;
}
</style>

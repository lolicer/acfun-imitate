<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
const props = defineProps<{
    text: string
    maxLine: number
}>()

const textRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (textRef.value) {
        // 判断文本是否溢出
        if (textRef.value.scrollHeight > textRef.value.clientHeight) {
            tooltip.value = props.text
            console.log(
                props.text,
                textRef.value,
                textRef.value.scrollHeight,
                textRef.value.clientHeight
            )
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
    <div
        ref="textRef"
        :title="tooltip"
        :style="{
            display: '-webkit-box',
            '-webkit-line-clamp': props.maxLine,
            'line-clamp': props.maxLine,
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            'text-overflow': 'ellipsis'
        }"
    >
        {{ props.text }}
    </div>
</template>

<style scoped></style>

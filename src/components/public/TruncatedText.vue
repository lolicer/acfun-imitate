<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
const props = defineProps<{
    text: string
    maxLine: number
}>()

const shouldTrimStart = [
    '【',
    '“',
    '《',
    '〈',
    '「',
    '『',
    '‘',
    '（',
    '〔',
    '〖',
    '［',
    '｛'
].includes(props.text[0])
const textIndent = shouldTrimStart ? '-0.5em' : '0'

const textRef = ref<HTMLElement | null>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (textRef.value) {
        // 判断文本是否溢出
        if (textRef.value.scrollHeight > textRef.value.clientHeight) {
            tooltip.value = props.text
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
    <div class="truncated-text" ref="textRef" :title="tooltip">
        <slot name="article-icon"></slot>
        {{ props.text }}
    </div>
</template>

<style scoped>
.truncated-text {
    text-indent: v-bind(textIndent);

    display: -webkit-box;
    -webkit-line-clamp: v-bind('props.maxLine');
    line-clamp: v-bind('props.maxLine');
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* text-overflow: ellipsis; -webkit-line-clamp自带，写上这个会导致边界情况下出BUG（如：maxLine为2时，在第一行就截断并显示省略号，但没有title） */
}
</style>

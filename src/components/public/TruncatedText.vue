<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
const props = withDefaults(
    defineProps<{
        text: string
        maxLine: number
        trimStart?: boolean
    }>(),
    {
        trimStart: true
    }
)

const textIndent = computed(() => {
    if (!props.trimStart) return '0'

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
    ].includes(props.text?.[0] || '')

    return shouldTrimStart ? '-0.5em' : '0'
})

const textRef = ref<HTMLElement | null>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (textRef.value) {
        // 判断文本是否溢出
        if (textRef.value.scrollHeight > textRef.value.clientHeight) {
            tooltip.value = props.text
        } else {
            tooltip.value = ''
        }
    }
}
watch(
    () => props.text,
    () => {
        nextTick(() => {
            checkOverflow()
        })
    }
)
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

<script setup lang="ts">
import { ElCarousel } from 'element-plus'

const props = withDefaults(
    defineProps<{
        autoplay?: boolean
        indicatorPosition?: '' | 'none' | 'outside'
        arrow?: 'always' | 'hover' | 'never'
    }>(),
    {
        autoplay: true,
        indicatorPosition: '',
        arrow: 'hover'
    }
)

const emit = defineEmits<{
    (event: 'change', current: number, prev: number): void
}>()

function handleChange(current: number, prev: number) {
    emit('change', current, prev)
}
</script>

<template>
    <ElCarousel
        height="auto"
        :autoplay="props.autoplay"
        :indicator-position="props.indicatorPosition"
        :arrow="props.arrow"
        @change="handleChange"
    >
        <slot></slot>
    </ElCarousel>
</template>

<style scoped>
:deep(.el-carousel__item) {
    height: auto;
}
</style>

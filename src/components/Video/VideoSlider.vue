<script setup lang="ts">
import { ElSlider } from 'element-plus'
import { formatSeconds } from '@/utils/time'

const model = defineModel<number>()

const props = defineProps<{
    maxValue: number
}>()

const emit = defineEmits<{
    change: [value: number]
    input: [value: number]
}>()

function onChange(value: number | number[]) {
    if (typeof value === 'number') {
        emit('change', value)
    }
}
function onInput(value: number | number[]) {
    if (typeof value === 'number') {
        emit('input', value)
    }
}
</script>

<template>
    <ElSlider
        v-model="model"
        size="small"
        :max="props.maxValue"
        :format-tooltip="formatSeconds"
        @change="onChange"
        @input="onInput"
        style="
            height: 16px;
            --el-slider-height: 4px;
            --el-slider-button-wrapper-offset: -16px;
        "
    />
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
:deep(.el-slider__bar) {
    background-color: var(--color-acfun);
}
:deep(.el-slider__button-wrapper) {
    cursor: pointer;
}

:deep(.el-slider__button) {
    height: 13px;
    width: 13px;
    border: none;
    background-color: var(--color-acfun);

    cursor: pointer;
}
</style>

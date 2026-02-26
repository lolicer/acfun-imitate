<script setup lang="ts">
import { ElSlider } from 'element-plus'

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

function formatTooltip(value: number): number {
    return Math.round(value * 100)
}
</script>

<template>
    <ElSlider
        v-model="model"
        size="small"
        :step="0.01"
        :vertical="true"
        :max="props.maxValue"
        :format-tooltip="formatTooltip"
        @change="onChange"
        @input="onInput"
        style="
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

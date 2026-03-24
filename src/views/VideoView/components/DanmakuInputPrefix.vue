<script lang="ts" setup="">
import { DanmakuColor, DanmakuColors, DanmakuPosition } from '@/types/Video'
import { getDanmakuColor } from '@/utils/style'

const props = defineProps<{
    size: string
}>()

const selectedPosition = defineModel<DanmakuPosition>('selectedPosition')
const selectedColor = defineModel<DanmakuColor>('selectedColor')

const DANMAKU_POSITION_MAP: Record<DanmakuPosition, string> = {
    normal: '滚动',
    top: '顶部',
    bottom: '底部'
}

function handlePositionItemClick(position: DanmakuPosition) {
    selectedPosition.value = position
}
function handleColorItemClick(color: DanmakuColor) {
    selectedColor.value = color
}
</script>

<template>
    <div class="prefix-content">
        <div class="prefix-content-icon"></div>
        <div class="prefix-content-dropdown">
            <div class="dropdown-item dropdown-item-position">
                <span>位置</span>
                <div class="dropdown-item-position-content">
                    <span
                        class="position-item"
                        v-for="(value, key) in DANMAKU_POSITION_MAP"
                        :class="{ active: selectedPosition === key }"
                        @click="handlePositionItemClick(key)"
                    >
                        {{ value }}
                    </span>
                </div>
            </div>
            <div class="dropdown-item dropdown-item-color">
                <span>颜色</span>
                <div class="dropdown-item-color-content">
                    <div
                        class="color-item"
                        v-for="color in DanmakuColors"
                        :style="{
                            'background-color': getDanmakuColor(color)
                        }"
                        :class="{
                            active: selectedColor === color
                        }"
                        @click="handleColorItemClick(color)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.prefix-content {
    width: v-bind(props.size);
    height: v-bind(props.size);

    margin: 0;
    transform: translateX(-7px);

    position: relative;
}
.prefix-content-icon {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-1);
    mask-image: url('/icons/video/DanmakuSetting.svg');
    mask-size: 100% 100%;
    -webkit-mask-image: url('/icons/video/DanmakuSetting.svg');
    -webkit-mask-size: 100% 100%;
}
.prefix-content-dropdown {
    cursor: default;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 900%;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    padding: 10px 10px 40px;

    /* 覆盖prefix插槽本来的影响 */
    display: none;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
.prefix-content:hover .prefix-content-dropdown {
    display: flex;
}
.dropdown-item {
    width: 100%;
}
.dropdown-item > span {
    font-size: 13px;
    color: white;
}
.dropdown-item-position-content {
    display: flex;
    gap: 6px;
}
.position-item {
    cursor: pointer;

    box-sizing: border-box;
    border: 2px solid var(--color-gray-1);
    padding: 1px 4px;
    line-height: 1.5;
    border-radius: 6px;
}
.position-item.active {
    color: var(--color-acfun);
    border-color: var(--color-acfun);
}
.dropdown-item-color-content {
    width: 100%;
    display: grid;
    /* 创建 6 个等宽列 */
    grid-template-columns: repeat(6, 1fr);
    /* 设置网格间距 */
    gap: 14px;
}
.color-item {
    cursor: pointer;
    aspect-ratio: 1;
    border-radius: 5px;

    box-shadow:
        1px 1px 1px rgba(255, 255, 255, 0.5),
        -1px 1px 1px rgba(255, 255, 255, 0.5),
        1px -1px 1px rgba(255, 255, 255, 0.5),
        -1px -1px 1px rgba(255, 255, 255, 0.5);
}
.color-item.active {
    box-sizing: border-box;
    border: 2px solid var(--color-acfun);
}
</style>

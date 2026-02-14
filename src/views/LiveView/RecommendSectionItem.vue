<script setup lang="ts">
import { RecommendSectionItem } from '@/types/Live'
import { ref } from 'vue'

const props = defineProps<{
    data: RecommendSectionItem
}>()

// 是否存在下拉菜单
const showDropdown =
    props.data.dropdownMenu && props.data.dropdownMenu.length != 0

const recommendSectionItemContentRef = ref<HTMLElement>(null)
const dropdownPosition = ref<'bottom' | 'top'>('top')
// 确定dropdown显示位置
function determineDropdownPosition() {
    if (!recommendSectionItemContentRef) return

    const { bottom } =
        recommendSectionItemContentRef.value.getBoundingClientRect()
    const screenHeight = window.innerHeight
    const remainingHeight = screenHeight - bottom
    if (remainingHeight > 120) {
        // 有足够的空间使dropdown显示在下部
        dropdownPosition.value = 'bottom'
    } else {
        // 无足够的空间使dropdown显示在下部
        dropdownPosition.value = 'top'
    }
}
</script>

<template>
    <div
        class="recommend-section-item-content"
        ref="recommendSectionItemContentRef"
        @mouseover="determineDropdownPosition"
    >
        <div class="section-btn">
            <img :src="props.data.imgUrl" alt="" />
            <div class="section-btn-text">
                {{ props.data.tag }}
            </div>
        </div>
        <div
            v-if="showDropdown"
            :class="['section-dropdown', dropdownPosition]"
        >
            <div
                v-for="item in props.data.dropdownMenu"
                class="section-dropdown-item"
            >
                <img :src="item.imgUrl" alt="" />
                <div class="section-dropdown-item-text">
                    {{ item.tag }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.recommend-section-item-content {
    width: 80px;
    position: relative;
}
.section-btn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
}
.section-btn:hover {
    background-color: var(--color-gray-3);
}
.section-btn > img {
    width: calc(80px - 2 * 8px);
    aspect-ratio: 1;
    object-fit: cover;

    box-sizing: border-box;
    margin: 2px 8px 0 8px;
}
.section-btn-text {
    font-size: 14px;
    padding-bottom: 8px;
}
.section-btn-text:hover {
    color: var(--color-acfun);
}

.section-dropdown {
    display: none;
    position: absolute;

    left: 50%;
    transform: translate(-50%, 0);

    border-radius: 8px;
    background-color: var(--color-gray-3);
    box-sizing: border-box;
    padding: 10px 16px;
}
.recommend-section-item-content:hover .section-dropdown {
    display: flex;
}
.section-dropdown.top {
    bottom: 100%;
}
.section-dropdown.bottom {
    top: 100%;
}
.section-dropdown-item {
    cursor: pointer;

    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
}
.section-dropdown-item:hover {
    background-color: var(--color-gray-4);
}
.section-dropdown-item > img {
    width: calc(80px - 2 * 8px);
    margin: 2px 8px 0 8px;
}
.section-dropdown-item-text {
    font-size: 14px;
    padding-bottom: 8px;
}
.section-dropdown-item-text:hover {
    color: var(--color-acfun);
}
</style>

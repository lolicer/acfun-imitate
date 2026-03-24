<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        text: string[]
        tags?: string[]
        /**
         * 收起时最多显示的行数（超过则可收起/展开）
         */
        maxLine?: number
    }>(),
    {
        maxLine: 4,
        tags: () => []
    }
)

const isExpanded = ref(false)
const shouldShowToggle = ref(false)

const collapsedTextRef = ref<HTMLDivElement | null>(null)

// 将简介拆分为多段后统一渲染为字符串，避免直接渲染数组导致出现逗号。
const displayText = computed(() => props.text.join('\n'))

const checkOverflow = () => {
    const el = collapsedTextRef.value
    if (!el) return

    // 收起态下，如果内容高度大于可视高度，说明确实被截断了
    const overflow = el.scrollHeight > el.clientHeight + 1
    shouldShowToggle.value = overflow

    if (!overflow) {
        isExpanded.value = false
    }
}

let resizeObserver: ResizeObserver | null = null

watch(
    () => props.text,
    async () => {
        isExpanded.value = false
        await nextTick()
        checkOverflow()
    },
    { deep: true }
)

onMounted(() => {
    nextTick(() => {
        checkOverflow()

        if (!collapsedTextRef.value) return

        resizeObserver = new ResizeObserver(() => {
            checkOverflow()
        })
        resizeObserver.observe(collapsedTextRef.value)
    })
})

onUnmounted(() => {
    resizeObserver?.disconnect()
    resizeObserver = null
})

const toggleExpanded = () => {
    if (!shouldShowToggle.value) return
    isExpanded.value = !isExpanded.value
}
</script>

<template>
    <div class="video-introduction">
        <div class="video-introduction-content">
            <!-- 收起态：用于展示截断效果 + 计算是否溢出 -->
            <div
                ref="collapsedTextRef"
                class="intro-text intro-text--collapsed"
                :class="{ 'is-visible': !isExpanded, 'is-hidden': isExpanded }"
            >
                {{ displayText }}
            </div>

            <!-- 展开态：不进行行截断 -->
            <div
                class="intro-text intro-text--expanded"
                :class="{ 'is-visible': isExpanded, 'is-hidden': !isExpanded }"
            >
                {{ displayText }}
            </div>

            <button
                v-if="shouldShowToggle"
                type="button"
                class="toggle-btn"
                :aria-expanded="isExpanded"
                @click="toggleExpanded"
            >
                {{ isExpanded ? '收起' : '展开' }}
            </button>

            <div v-if="props.tags?.length" class="intro-tags">
                <span
                    v-for="(tag, idx) in props.tags"
                    :key="idx"
                    class="intro-tag"
                >
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-introduction {
    border-top: 1px solid var(--color-gray-3);
    border-bottom: 1px solid var(--color-gray-3);
    padding: 12px 0;
    margin: 8px 0;

    position: relative;
}

.video-introduction-content {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.intro-text {
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-gray-0);
    white-space: pre-wrap;
    text-indent: 0;
}

.intro-text--collapsed {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: v-bind('props.maxLine');
    line-clamp: v-bind('props.maxLine');
    overflow: hidden;
}

.intro-text--expanded {
    overflow: visible;
}

.is-visible {
    position: relative;
    visibility: visible;
    pointer-events: auto;
}

.is-hidden {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    pointer-events: none;
}

.toggle-btn {
    position: static;

    border: 0;
    background: transparent;
    padding: 0;

    cursor: pointer;
    color: var(--color-acfun);
    font-size: 13px;
    line-height: 1;

    user-select: none;

    margin-top: 8px;
}

.toggle-btn:hover {
    text-decoration: underline;
}

.intro-tags {
    width: 100%;
    margin-top: 8px;

    display: flex;
    flex-wrap: wrap; /* 超出一行自动换行 */
    gap: 10px 14px;
}

.intro-tag {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 12px;

    cursor: pointer;

    font-size: 13px;
    line-height: 1.2;
    color: var(--color-gray-1);
    background-color: var(--color-gray-4);
}
.intro-tag:hover {
    color: var(--color-gray-0);
    background-color: var(--color-gray-3);
}
</style>

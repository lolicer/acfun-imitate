<script setup lang="ts">
import { CarouselBangumiData } from '@/types/BangumiProgressItem'
import { getCssVar } from '@/utils/style'
import { ElProgress } from 'element-plus'
import { computed, nextTick, onMounted, ref } from 'vue'

const props = defineProps<{
    data: CarouselBangumiData
}>()

const processPercentage = computed(() => {
    const num = props.data.progress.currentEpisodeProgress
    return num * 100 + '%'
})

const titleRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
    if (titleRef.value) {
        // 判断文本是否溢出
        if (titleRef.value.scrollHeight > titleRef.value.clientHeight) {
            tooltip.value = props.data.title
            console.log(
                props.data.title,
                titleRef.value,
                titleRef.value.scrollHeight,
                titleRef.value.clientHeight
            )
        }
    }
}

const progressColor = getCssVar('--color-acfun')

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
})
</script>

<template>
    <div class="bangumi-progress-content">
        <div class="content-image">
            <img :src="data.imgUrl" alt="" />
            <div class="image-overlay">
                <div
                    v-if="data.progress.currentEpisode"
                    class="image-overlay-text"
                >
                    看到{{ data.progress.currentEpisode }}&nbsp;{{
                        processPercentage
                    }}
                </div>
                <div v-else class="image-overlay-text">尚未观看</div>
                <div class="image-overlay-progress">
                    <ElProgress
                        :percentage="data.progress.currentEpisodeProgress * 100"
                        :stroke-width="2"
                        :show-text="false"
                        :color="progressColor"
                    />
                </div>
            </div>
        </div>

        <div class="content-title" ref="titleRef" :title="tooltip">
            {{ data.title }}
        </div>
        <div class="content-total-episodes">全{{ data.totalEpisodes }}话</div>
    </div>
</template>

<style scoped>
.bangumi-progress-content {
    min-width: 0;
    box-sizing: border-box;
    padding: 10px;

    flex: 0 0 16.6%;
}
.bangumi-progress-content:hover {
    cursor: pointer;
}
.content-image {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}
.content-image img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    bottom: 0;

    padding: 0 4px 4px 4px;
    box-sizing: border-box;

    width: 100%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );
}
.image-overlay-text {
    color: white;
    font-size: 14px;
}
.image-overlay-progress {
    opacity: 0.8;
    padding: 2px 0 2px 0;
}

.content-title {
    /* 控制超出一行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.content-title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
.content-total-episodes {
    font-size: 14px;
    color: var(--color-gray-0);
}
</style>

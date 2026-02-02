<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import { SectionRanking } from '@/types/HomeSection'
import { formatSeconds } from '../../../utils/time'
import Up from '@/assets/icons/concise/Up.vue'

const props = defineProps<{
    data: SectionRanking
}>()
</script>

<template>
    <div class="ranking-content">
        <div class="cover">
            <div class="cover-overlay">
                <span>
                    {{ formatSeconds(props.data.duration) }}
                </span>
            </div>
            <img :src="props.data.imgUrl" alt="" />
        </div>
        <div class="info">
            <TruncatedText
                class="info-title"
                :text="props.data.title"
                :max-line="2"
            />
            <div class="info-line-2">
                <Up class="up-icon" />
                <span class="up-name">{{ props.data.up }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ranking-content {
    width: 100%;
    min-height: 90px;

    cursor: pointer;

    display: flex;
}

.cover {
    flex: 4;

    width: 100%;
    height: min-content;
    aspect-ratio: 16/9;
    overflow: hidden;

    position: relative;
}
.cover-overlay {
    position: absolute;
    bottom: 0px;

    width: 100%;
    height: 40%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );
    border-radius: 0 0 4px 4px;
}
.cover-overlay > span {
    position: absolute;
    right: 4px;
    bottom: 0px;
    color: white;
    font-size: 13px;
}
.cover > img {
    border-radius: 4px;
    width: 100%;
    object-fit: cover;
}

.info {
    flex: 6;

    height: min-content;

    box-sizing: border-box;
    padding-left: 4px;
}
.info-title {
    font-size: 14px;

    line-height: 20px;
    height: 40px;
}
.info-title:hover {
    color: var(--color-acfun);
}
.info-line-2 {
    display: flex;
    align-items: center;
}
.info-line-2:hover > * {
    color: var(--color-acfun);
}
.up-icon {
    color: var(--color-gray-1);
    transform: translateY(1px);
}
.up-name {
    color: var(--color-gray-1);
    font-size: 13px;
    padding-left: 2px;
}
</style>

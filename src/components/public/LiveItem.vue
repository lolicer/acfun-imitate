<script lang="ts" setup>
import LiveItem from '@/types/LiveItem'
import { formatNumber } from '@/utils/time'
import TruncatedText from './TruncatedText.vue'
const props = defineProps<{
    data: LiveItem
}>()
</script>

<template>
    <div class="live-item-content">
        <div class="cover">
            <img :src="props.data.coverUrl" alt="" />
            <div class="cover-overlay"></div>
            <div class="cover-info">
                <span class="cover-info-tag">
                    {{ props.data.tag }}
                </span>
                <div class="cover-info-like">
                    <img src="/icons/home/Like.svg" alt="" />
                    <span>{{ formatNumber(props.data.likeCount) }}</span>
                </div>
                <div class="cover-info-audience-count">
                    <img src="/icons/liveItem/People.svg" alt="" />
                    <span>{{ formatNumber(props.data.audienceCount) }}</span>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="info-avatar">
                <img :src="props.data.avatarUrl" alt="" />
            </div>
            <div class="info-right">
                <TruncatedText
                    class="info-right-title"
                    :text="props.data.title"
                    :max-line="1"
                />
                <div class="info-line-2">
                    <div class="up">
                        <img src="/icons/public/Up.svg" class="up-icon" />
                        <span class="up-name">{{ props.data.up }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.live-item-content {
    display: inline-block;
    min-width: 186px;
    box-sizing: border-box;
}
.cover {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
.cover:hover {
    cursor: pointer;
}
.cover > img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.cover-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );
}
.cover-info {
    position: absolute;
    bottom: 6px;
    display: flex;
    color: white;
    box-sizing: border-box;
    padding: 0 8px;
    width: 100%;
}
.cover-info > div {
    display: flex;
    align-items: center;
    font-size: 12.5px;
}
.cover-info-tag {
    margin-right: auto;
    font-size: 14.5px;
}
.cover-info-like {
    margin-right: 8px;
}
.cover-info-like > span {
    transform: translateY(-1px);
    margin-left: 1px;
}
.cover-info-audience-count > span {
    transform: translateY(-1px);
    margin-left: 1px;
}

.info {
    display: flex;
    margin-top: 4px;
}
.info-avatar {
    flex: 9;
}
.info-avatar > img {
    width: 100%;
    border-radius: 50%;
}
.info-right {
    flex: 64;
    box-sizing: border-box;
    padding-left: 10px;
}
.info-right-title {
    line-height: 20px;
    height: 20px;
    font-size: 15px;
}
.info-right-title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
.info-line-2 {
    display: flex;
    line-height: 16px;
}
.info-line-2:hover {
    cursor: pointer;
    * {
        color: var(--color-acfun);
    }
}
.up {
    display: flex;
    align-items: center;
}
.up-icon {
    transform: translateY(2px);
}
.up-name {
    font-size: 13px;
    padding-left: 4px;
    color: var(--color-gray-1);
}
</style>

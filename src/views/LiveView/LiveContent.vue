<script setup lang="ts">
import { ElScrollbar } from 'element-plus'
import { LiveHeaderData } from '@/data/Live'
import { ref } from 'vue'
import { liveStreamersData } from '@/data/TitleBar'
import TruncatedText from '@/components/public/TruncatedText.vue'

const activeVideo = ref(0)
function changeVideo(index: number) {
    activeVideo.value = index
}

const headerVideoRef = ref<HTMLVideoElement | null>(null)

// 播放/暂停控制
const isPlaying = ref<boolean>(false)
async function togglePlayback() {
    if (!headerVideoRef.value) return

    if (isPlaying.value) {
        headerVideoRef.value.pause()
    } else {
        await headerVideoRef.value.play()
    }
}

// 静音控制
const isMuted = ref<boolean>(true)
function toogleMute() {
    if (!headerVideoRef.value) return

    isMuted.value = !isMuted.value
    headerVideoRef.value.muted = isMuted.value
}
</script>

<template>
    <div class="live-content">
        <div class="header">
            <div class="header-content">
                <video
                    ref="headerVideoRef"
                    :src="LiveHeaderData[activeVideo].videoUrl"
                    :poster="LiveHeaderData[activeVideo].coverUrl"
                    autoplay
                    muted
                    loop
                    @playing="isPlaying = true"
                    @pause="isPlaying = false"
                ></video>
                <div class="header-content-overlay">
                    <div
                        class="header-content-overlay-playback-btn"
                        @click="togglePlayback"
                    >
                        <img
                            v-if="isPlaying"
                            src="/icons/public/videoControl/pause.svg"
                        />
                        <img v-else src="/icons/public/videoControl/play.svg" />
                    </div>
                    <div
                        class="header-content-overlay-mute-btn"
                        @click="toogleMute"
                    >
                        <img
                            v-if="isMuted"
                            src="/icons/public/videoControl/volumeOff.svg"
                        />
                        <img
                            v-else
                            src="/icons/public/videoControl/volumeOn_2.svg"
                        />
                    </div>
                    <div class="header-content-overlay-enter-btn">
                        <span class="header-content-overlay-enter-btn-text"
                            >进入直播间</span
                        >
                    </div>
                </div>
            </div>
            <div class="header-nav">
                <div
                    class="header-nav-cover"
                    v-for="(item, index) in LiveHeaderData"
                    :key="index"
                    @click="changeVideo(index)"
                    :title="item.title"
                >
                    <img
                        :src="item.coverUrl"
                        :class="{ active: activeVideo === index }"
                    />
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="recommend-titlebar">
                <div class="recommend-titlebar-following">
                    <div class="recommend-titlebar-following-left">
                        <span class="recommend-titlebar-following-title"
                            >我的关注</span
                        >
                        <span class="recommend-titlebar-following-details"
                            >{{ liveStreamersData.length }}人直播中</span
                        >
                    </div>
                    <div class="recommend-titlebar-following-right">
                        <span class="recommend-titlebar-following-all">查看全部 ></span>
                    </div>
                </div>
            </div>
            <div class="recommend-content">
                <div class="recommend-content-following">
                    <ElScrollbar>
                        <div class="recommend-content-following-scrollbar">
                            <div
                                class="recommend-content-following-scrollbar-item"
                                v-for="item in liveStreamersData"
                            >
                                <img :src="item.avatarUrl" alt="" />
                                <TruncatedText
                                    class="recommend-content-following-scrollbar-item-text"
                                    :text="item.name"
                                    :max-line="2"
                                />
                            </div>
                        </div>
                    </ElScrollbar>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    box-sizing: border-box;
    padding: 20px 50px;
    display: flex;

    width: 100%;
    aspect-ratio: 2.3;
    min-height: 500px;

    background-image: url('/images/live/header-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.header-content {
    flex: 8;

    display: flex;
    justify-content: center;

    position: relative;
}
.header-content > video {
    height: 100%;
}
.header-content-overlay {
    display: none;

    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 5%,
        transparent 10%,
        transparent 100%
    );
}
.header-content:hover .header-content-overlay {
    display: block;
}
.header-content-overlay-playback-btn {
    position: absolute;
    left: 24px;
    bottom: 12px;

    height: 32px;
    cursor: pointer;
    display: inline;
}
.header-content-overlay-playback-btn > img {
    height: 100%;
}
.header-content-overlay-mute-btn {
    position: absolute;
    left: calc(24px + 32px + 12px);
    bottom: 12px;

    height: 32px;
    cursor: pointer;
    display: inline flex;
    align-items: center;
}
.header-content-overlay-mute-btn > img {
    height: 90%;
}
.header-content-overlay-enter-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 18%;
    height: 10%;

    box-sizing: border-box;
    border: 1px solid var(--color-acfun);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.2s ease;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}
.header-content-overlay-enter-btn:hover {
    background-color: var(--color-acfun);
}
.header-content-overlay-enter-btn-text {
    color: var(--color-acfun);
    font-size: clamp(12px, 1.5cqw, 28px);

    transition: 0.4s ease;
}
.header-content-overlay-enter-btn:hover .header-content-overlay-enter-btn-text {
    color: white;
    font-weight: 350;
}
.header-nav {
    flex: 2;
    display: flex;
    flex-direction: column;
    height: auto;
}
.header-nav-cover {
    flex: 1;
    height: 20%;
    width: min-content;
    background-color: rgba(0, 0, 0, 0.3);

    box-sizing: border-box;
    padding: 8px;
    cursor: pointer;

    position: relative;
}

.header-nav-cover:first-child {
    border-radius: 8px 8px 0 0;
}
.header-nav-cover:last-child {
    border-radius: 0 0 8px 8px;
}
.header-nav-cover > img {
    height: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;

    box-sizing: border-box;
    border-radius: 4px;
}
.header-nav-cover > img.active {
    border: 4px solid var(--color-acfun);
}
.header-nav-cover:has(img.active)::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    border-right: 10px solid var(--color-acfun);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}

.recommend {
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
}

.recommend-titlebar {
    height: 50px;
    display: flex;
}
.recommend-titlebar-following{
    position: relative;
    bottom: 4px;

    width: calc(5 * (10px + 58px + 10px) + 2 * 32px);
    height: 100%;
}
.recommend-titlebar-following-left {
    width: fit-content;
    position: absolute;
    left: 0px;
    bottom: 0px;
}
.recommend-titlebar-following-right {
    width: fit-content;
    position: absolute;
    right: 0px;
    bottom: 0px;
}
.recommend-titlebar-following-title {
    font-size: 20px;
}
.recommend-titlebar-following-details {
    font-size: 12px;
    border-radius: 8.5px / 50%;
    padding: 0 6px;
    margin-left: 10px;
    background-color: var(--color-acfun);
    color: white;
}
.recommend-titlebar-following-all {
    font-size: 12px;
    cursor: pointer;
}
.recommend-titlebar-following-all:hover{
    color: var(--color-acfun);
}

.recommend-content {
    width: 100%;
}
.recommend-content-following {
    box-sizing: border-box;
    width: calc(5 * (10px + 58px + 10px) + 2 * 32px);

    padding: 10px 32px 10px 32px;
    border-radius: 8px;
    background-color: var(--color-gray-4);
}
.recommend-content-following-scrollbar {
    display: flex;
}
.recommend-content-following-scrollbar-item {
    cursor: pointer;
    flex-shrink: 0;
    width: calc(10px + 58px + 10px);
    box-sizing: border-box;
    padding: 6px 10px 0px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.recommend-content-following-scrollbar-item:hover {
    background-color: var(--color-gray-3);
}
.recommend-content-following-scrollbar-item > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;

    box-sizing: border-box;
    border: 1px solid var(--color-acfun);
    padding: 2px;
}
.recommend-content-following-scrollbar-item-text {
    text-align: center;
    font-size: 13px;
    margin: 4px 0 12px 0;
}
.recommend-content-following-scrollbar-item-text:hover {
    color: var(--color-acfun);
}
</style>

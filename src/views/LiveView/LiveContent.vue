<script setup lang="ts">
import { LiveHeaderData } from '@/data/Live'
import { ref } from 'vue'

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
</style>

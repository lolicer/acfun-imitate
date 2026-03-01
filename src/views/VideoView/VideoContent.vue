<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import VideoSlider from '@/components/Video/VideoSlider.vue'
import {
    formatNumber,
    formatSeconds,
    formatTimestampToDateInDetail
} from '@/utils/time'
import { ref } from 'vue'
import VolumeSlider from '@/components/Video/VolumeSlider.vue'
import { useVideoPlayer } from '@/views/VideoView/hooks/useVideoPlayer'
import { DanmakuData } from '@/data/Video'
import VideoDanmakuOverlay from '@/views/VideoView/VideoDanmakuOverlay.vue'

const props = defineProps<{
    videoData: {
        title: string
        viewCount: number
        danmakuCount: number
        releaseTime: number
        videoUrl: string
    }
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
// 视频控制的钩子
const {
    speeds,
    currentTime,
    duration,
    isPlaying,
    volume,
    speedRate,
    playbackBtnUrl,
    volumeBtnUrl,
    handleVideoLoadedMetadata,
    handleVideoTimeUpdate,
    handleVideoPlay,
    handleVideoPause,
    handleDanmakuOverlayClick,
    handleVideoSliderMouseDown,
    handleVideoSliderMouseUp,
    handleVideoSliderChange,
    handleControlsPlaybackClick,
    handleControlsSpeedDropdownItemClick,
    handleControlsVolumeClick,
    handleVolumeSliderInput
} = useVideoPlayer(videoRef)
</script>

<template>
    <div class="video-content">
        <div class="content-left">
            <TruncatedText
                class="video-title"
                :text="props.videoData.title"
                :max-line="2"
            />
            <div class="video-info">
                <div class="info-icon info-view-count-icon"></div>
                <span>{{ formatNumber(props.videoData.viewCount) }}</span>
                <div class="info-icon info-danmaku-chat-icon"></div>
                <span>{{ formatNumber(props.videoData.danmakuCount) }}</span>
                <span class="info-release-time">{{
                    formatTimestampToDateInDetail(props.videoData.releaseTime)
                }}</span>
            </div>
            <div class="video-main">
                <video
                    ref="videoRef"
                    :src="props.videoData.videoUrl"
                    @loadedmetadata="handleVideoLoadedMetadata"
                    @timeupdate="handleVideoTimeUpdate"
                    @play="handleVideoPlay"
                    @pause="handleVideoPause"
                ></video>
                <VideoDanmakuOverlay
                    class="video-main-danmaku-overlay"
                    :danmaku-data="DanmakuData"
                    :current-time="currentTime"
                    :is-playing="isPlaying"
                    @click="handleDanmakuOverlayClick"
                />
                <div class="video-main-controls-overlay">
                    <VideoSlider
                        @mousedown="handleVideoSliderMouseDown"
                        @mouseup="handleVideoSliderMouseUp"
                        v-model="currentTime"
                        :max-value="duration"
                        @change="handleVideoSliderChange"
                        @input=""
                    />
                    <div class="video-controls">
                        <div
                            class="video-controls-icon video-controls-playback"
                            @click="handleControlsPlaybackClick"
                        >
                            <img :src="playbackBtnUrl" alt="" />
                        </div>
                        <span class="video-controls-time">
                            {{ formatSeconds(currentTime) }}/{{
                                formatSeconds(duration)
                            }}
                        </span>
                        <div class="video-controls-speed">
                            <span>{{
                                speedRate === 1 ? '倍速' : speeds.get(speedRate)
                            }}</span>
                            <div class="video-controls-speed-dropdown">
                                <div
                                    v-for="[key, value] in speeds"
                                    class="video-controls-speed-dropdown-item"
                                    :class="{ active: speedRate === key }"
                                    @click="
                                        handleControlsSpeedDropdownItemClick(
                                            key
                                        )
                                    "
                                >
                                    {{ value }}
                                </div>
                            </div>
                        </div>
                        <div class="video-controls-icon video-controls-volume">
                            <img
                                :src="volumeBtnUrl"
                                alt=""
                                @click="handleControlsVolumeClick"
                            />
                            <div class="video-controls-volume-slider">
                                <VolumeSlider
                                    v-model="volume"
                                    :max-value="1"
                                    @input="handleVolumeSliderInput"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="options"></div>
            <div class="introduction">
                <div class="introduction-text"></div>
                <div class="introduction-tags"></div>
            </div>
            <div class="comments"></div>
        </div>
        <div class="content-right"></div>
    </div>
</template>

<style scoped>
.video-content {
    display: flex;
    gap: 30px;

    padding: 0 50px;
}

.content-left {
    flex: 7.5;

    padding-top: 40px;
}
.video-title {
    font-size: 23px;
    font-weight: 400;
}
.video-info {
    display: flex;
    align-items: center;
    margin-top: 12px;
}
.video-info > span {
    font-size: 14px;
    line-height: 1;
    color: var(--color-gray-1);
}
.info-icon {
    height: 16px;
    width: 16px;
    margin-right: 4px;

    background-color: var(--color-gray-2);
    -webkit-mask-size: contain;
    mask-size: contain;
}
.info-view-count-icon {
    -webkit-mask: url('/icons/video/ViewCount.svg') no-repeat center;
    mask: url('/icons/video/ViewCount.svg') no-repeat center;
}
.info-danmaku-chat-icon {
    -webkit-mask: url('/icons/video/DanmakuCount.svg') no-repeat center;
    mask: url('/icons/video/DanmakuCount.svg') no-repeat center;

    margin-left: 8px;
}
.info-release-time {
    margin-left: 12px;
}

.video-main {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 16px;
    background-color: black;

    position: relative;
}
.video-main > video {
    display: block; /* 消除基线空隙 */
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.video-main-danmaku-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - (7% + 16px));
}
.video-main-controls-overlay {
    position: absolute;
    width: 100%;
    height: calc(7% + 16px);
    bottom: 0;
    left: 0;

    box-sizing: border-box;
    padding: 0 20px;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );

    display: none;
    flex-direction: column;
    justify-content: flex-end;
}
.video-main:hover > .video-main-controls-overlay {
    display: flex;
}
.video-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 16px);
    bottom: 0;
    left: 0;

    box-sizing: border-box;
    padding: 0 20px;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 5%,
        transparent 10%
    );
}
.video-controls-icon {
    height: 100%;
    aspect-ratio: 1 / 1;
    cursor: pointer;
}
.video-controls-playback > img {
    height: 80%;
    width: 80%;
    object-fit: contain;
    margin: 10%;
}
.video-controls-time {
    line-height: 1;
    color: white;
    font-size: 13px;
}
.video-controls-speed {
    display: flex;
    cursor: pointer;

    margin-left: auto;

    position: relative;
}
.video-controls-speed > span {
    line-height: 1;
    color: white;
    font-size: 14px;
    width: 42px;
}
.video-controls-speed-dropdown {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;

    display: none;
    flex-direction: column;
}
.video-controls-speed:hover .video-controls-speed-dropdown {
    display: flex;
}
.video-controls-speed-dropdown-item {
    color: white;
    line-height: 2.3;
}
.video-controls-speed-dropdown-item.active {
    color: var(--color-acfun);
}
.video-controls-speed-dropdown-item:hover {
    color: var(--color-acfun);
}
.video-controls-volume {
    position: relative;
}
.video-controls-volume > img {
    height: 64%;
    width: 64%;
    object-fit: contain;
    margin: 18%;
}
.video-controls-volume-slider {
    position: absolute;
    bottom: 100%;

    height: 270%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    padding: 16px 0 16px;

    display: none;
    justify-content: center;
}
.video-controls-volume:hover .video-controls-volume-slider {
    display: flex;
}

.content-right {
    flex: 2.5;
}
</style>

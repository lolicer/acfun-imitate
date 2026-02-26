<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import VideoSlider from '@/components/Video/VideoSlider.vue'
import {
    formatNumber,
    formatSeconds,
    formatTimestampToDateInDetail
} from '@/utils/time'
import { computed, onMounted, ref } from 'vue'
import VolumeSlider from '@/components/Video/VolumeSlider.vue'

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
// 视频当前时间
const currentTime = ref<number>(0)
// 视频时长
const duration = ref<number>(0)
//是否正在拖拽进度条，防止视频的@timeupdate事件和进度条的更新事件同时竞争currentTime变量
const isDragging = ref<boolean>(false)
// 视频播放状态
const isPlaying = ref<boolean>(false)
// 控制播放的按钮
const playbackBtnUrl = computed(() => {
    return `/icons/public/videoControl/${isPlaying.value ? 'pause' : 'play'}.svg`
})
// 视频是否静音
const isMuted = ref<boolean>(false)
// 视频音量
const volume = ref<number>(0)
// 控制音量的图标
const volumeBtnUrl = computed(() => {
    let fileName: string
    if (isMuted.value || volume.value === 0) {
        fileName = 'volumeOff'
    } else if (volume.value <= 0.5) {
        fileName = 'volumeOn_1'
    } else {
        fileName = 'volumeOn_2'
    }

    return `/icons/public/videoControl/${fileName}.svg`
})
// 倍速map
const speeds = new Map<number, string>([
    [2, '2.0x'],
    [1.5, '1.5x'],
    [1.25, '1.25x'],
    [1, '1.0x'],
    [0.75, '0.75x'],
    [0.5, '0.5x']
])
// 视频倍速
const speedRate = ref<number>(0)

// 视频时间更新时，更新currentTime
function handleVideoTimeUpdate() {
    if (isDragging.value) return
    currentTime.value = videoRef.value ? videoRef.value.currentTime : 0
}

// 视频元数据加载完成后，更新视频时长和音量
function handleVideoLoadedMetadata() {
    duration.value = videoRef.value ? videoRef.value.duration : 0
}

// 开始播放
function handleVideoPlay() {
    isPlaying.value = true
}
// 暂停播放
function handleVideoPause() {
    isPlaying.value = false
}
// 视频音量变化
function handleVideoVolumeChange() {
    if (!videoRef.value) return

    volume.value = videoRef.value.volume
}

// 鼠标按下
function handleVideoSliderMouseDown() {
    isDragging.value = true
}
// 鼠标抬起
function handleVideoSliderMouseUp() {
    setTimeout(() => {
        isDragging.value = false
    }, 100)
}
// 改变进度条
function handleVideoSliderChange(value: number) {
    if (!videoRef.value) return

    videoRef.value.currentTime = value
}

// 点击播放控制按钮
async function handleControlsPlaybackClick() {
    if (!videoRef.value) return

    if (isPlaying.value) {
        videoRef.value.pause()
    } else {
        await videoRef.value.play()
    }
}
function handleControlsSpeedDropdownItemClick(speed: number) {
    if (!videoRef.value) return

    speedRate.value = speed
    videoRef.value.playbackRate = speedRate.value
}
// 点击音量调节按钮
function handleControlsVolumeClick() {
    if (!videoRef.value) return

    isMuted.value = !isMuted.value
    videoRef.value.muted = isMuted.value
}

// 调节音量滑块
function handleVolumeSliderInput(value: number) {
    if (!videoRef.value) return

    volume.value = value
    videoRef.value.volume = volume.value
}

onMounted(() => {
    if (videoRef.value) {
        isMuted.value = videoRef.value.muted
        volume.value = videoRef.value.volume
        speedRate.value = videoRef.value.playbackRate
    }
})
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
                    @timeupdate="handleVideoTimeUpdate"
                    @loadedmetadata="handleVideoLoadedMetadata"
                    @play="handleVideoPlay"
                    @pause="handleVideoPause"
                    @volumechange="handleVideoVolumeChange"
                ></video>
                <div class="video-main-overlay">
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
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.video-main-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    box-sizing: border-box;
    padding: 0 20px;

    display: none;
    flex-direction: column;
    justify-content: flex-end;
}
.video-main:hover > .video-main-overlay {
    display: flex;
}
.video-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7%;
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

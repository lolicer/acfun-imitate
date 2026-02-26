<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { formatSeconds } from '@/utils/time'

const props = withDefaults(
    defineProps<{
        src: string
        poster?: string
        autoplay?: boolean
    }>(),
    {
        poster: '',
        autoplay: false
    }
)

const emit = defineEmits<{
    ended: []
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref<boolean>(false) // 视频是否在播放
const duration = ref<number>(0) // 总时长
const currentTime = ref<number>(0) // 当前时间
const muted = ref<boolean>(true)

// 显示overlay
const showOverlayAndCursor = ref<boolean>(false)
// 显示overlay和鼠标的倒计时
let timer: ReturnType<typeof setTimeout> | null = null

// 鼠标在.video-player中移动
function handleVideoPlayerMouseMove() {
    if (!showOverlayAndCursor.value) {
        showOverlayAndCursor.value = true
    }

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        showOverlayAndCursor.value = false
    }, 3000)
}
// 鼠标离开.video-player
function handleVideoPlayerMouseLeave() {
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
    showOverlayAndCursor.value = false
}

// 鼠标进入overlay
function handleOverlayMouseEnter() {
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
    showOverlayAndCursor.value = true
    console.log('enter')
}
// 鼠标离开overlay
function handleOverlayMouseLeave() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        showOverlayAndCursor.value = false
    }, 3000)
    console.log('leave')
}

// function checkRef(): boolean {
//     if (!videoRef.value) {
//         console.error('DOM不存在')
//         return false
//     } else {
//         return true
//     }
// }

// 视频元数据加载完成
function onMetadataLoaded() {
    if (!videoRef.value) return

    duration.value = videoRef.value.duration
    muted.value = videoRef.value.muted
}

// 视频时间更新
function onTimeUpdate() {
    if (!videoRef.value) return

    currentTime.value = videoRef.value.currentTime
}

// 视频播放状态被改变
function handlePlaybackChanged(playStatus: boolean) {
    if (!videoRef.value) return

    isPlaying.value = playStatus
}

//进度条被拖动
function handleProgressBarInput(e: Event) {
    if (!videoRef.value) return

    const target = e.target as HTMLInputElement
    videoRef.value.currentTime = parseFloat(target.value)
}

// 更改视频播放状态
async function togglePlayback() {
    if (!videoRef.value) return

    if (isPlaying.value) {
        videoRef.value.pause()
    } else {
        await videoRef.value.play()
    }
}

// 切换静音与否
function toggleMute() {
    if (!videoRef.value) return

    muted.value = !muted.value
    videoRef.value.muted = muted.value
}

onUnmounted(() => {
    if (timer) clearTimeout(timer)
})
</script>

<template>
    <div
        class="video-player"
        :class="{ 'show-cursor': showOverlayAndCursor }"
        @mousemove="handleVideoPlayerMouseMove"
        @mouseleave="handleVideoPlayerMouseLeave"
    >
        <video
            class="video-player-content"
            ref="videoRef"
            :src="props.src"
            :poster="props.poster"
            :autoplay="props.autoplay"
            :muted="true"
            @loadedmetadata="onMetadataLoaded"
            @timeupdate="onTimeUpdate"
            @ended="emit('ended')"
            @playing="handlePlaybackChanged(true)"
            @pause="handlePlaybackChanged(false)"
        ></video>
        <div
            class="video-overlay"
            :class="{ show: showOverlayAndCursor }"
            @mousemove.stop=""
            @mouseenter="handleOverlayMouseEnter"
            @mouseleave="handleOverlayMouseLeave"
        >
            <input
                type="range"
                class="overlay-progressbar"
                min="0"
                :max="duration"
                :value="currentTime"
                @input="handleProgressBarInput"
            />
            <div class="overlay-control">
                <div class="overlay-control-left">
                    <div
                        class="overlay-control-playback-btn"
                        @click="togglePlayback"
                    >
                        <img
                            :src="`/icons/public/videoControl/${isPlaying ? 'pause' : 'play'}.svg`"
                         alt=""/>
                    </div>
                    <div class="overlay-control-time">
                        {{ formatSeconds(currentTime) }}/{{
                            formatSeconds(duration)
                        }}
                    </div>
                </div>
                <div class="overlay-control-right">
                    <div class="overlay-control-mute" @click="toggleMute">
                        <img
                            :src="`/icons/public/videoControl/${muted ? 'volumeOff' : 'volumeOn_2'}.svg`"
                         alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-player {
    width: 100%;
    height: 100%;

    cursor: none;

    position: relative;
}
.video-player.show-cursor {
    cursor: auto;
}
.video-player-content {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.video-overlay {
    position: absolute;
    bottom: 0;

    visibility: hidden;

    width: 100%;
    height: 10%;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        transparent 100%
    );
}
/* noinspection CssUnusedSymbol */
.video-overlay.show {
    visibility: visible;
}
.overlay-progressbar {
    cursor: pointer;
    position: absolute;
    top: 0;

    width: 96%;
    left: 2%;

    height: 12px;

    /* 隐藏默认样式 */
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
}
.overlay-progressbar::-webkit-slider-container {
    overflow: hidden;
}
.overlay-progressbar::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: var(--color-acfun);
    margin-top: -4px;

    /* 绘制已滑过的进度条 https://segmentfault.com/a/1190000041543171 */
    border: 1px solid transparent;
    border-image: linear-gradient(
            var(--color-acfun-transparent),
            var(--color-acfun-transparent)
        )
        0 fill / 4 12 4 0 / 0 0 0 99vw;
}
.overlay-progressbar::-webkit-slider-runnable-track {
    height: 4px;
    background-color: var(--color-white-transparent);
}
.overlay-control {
    display: flex;
    justify-content: space-between;

    width: 94%;
    margin: 0 auto;
    height: 100%;
}
.overlay-control-left {
    display: flex;
    height: 100%;
    align-items: center;
}
.overlay-control-playback-btn {
    height: 60%;
    margin-right: 12px;

    cursor: pointer;
}
.overlay-control-playback-btn > img {
    height: 100%;
}
.overlay-control-time {
    color: white;
    font-size: 12px;
}
.overlay-control-right {
    display: flex;
    height: 100%;
    align-items: center;
}
.overlay-control-mute {
    height: 50%;

    cursor: pointer;
}
.overlay-control-mute > img {
    height: 100%;
}
</style>

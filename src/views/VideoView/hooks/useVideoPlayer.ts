import { computed, onMounted, ref, Ref } from 'vue'

export function useVideoPlayer(videoRef: Ref<HTMLVideoElement | null>) {
    // 倍速map
    const speeds = new Map<number, string>([
        [2, '2.0x'],
        [1.5, '1.5x'],
        [1.25, '1.25x'],
        [1, '1.0x'],
        [0.75, '0.75x'],
        [0.5, '0.5x']
    ])

    // 视频当前时间
    const currentTime = ref<number>(0)
    // 视频时长
    const duration = ref<number>(0)
    //是否正在拖拽进度条，防止视频的@timeupdate事件和进度条的更新事件同时竞争currentTime变量
    const isDragging = ref<boolean>(false)
    // 视频播放状态
    const isPlaying = ref<boolean>(false)
    // 视频音量
    const volume = ref<number>(0)
    // 视频静音前最后一次的音量
    const lastVolume = ref<number>(0)
    // 视频倍速
    const speedRate = ref<number>(0)

    // 控制播放的按钮
    const playbackBtnUrl = computed(() => {
        return `/icons/public/videoControl/${isPlaying.value ? 'pause' : 'play'}.svg`
    })
    // 控制音量的图标
    const volumeBtnUrl = computed(() => {
        let fileName: string
        if (volume.value === 0) {
            fileName = 'volumeOff'
        } else if (volume.value <= 0.5) {
            fileName = 'volumeOn_1'
        } else {
            fileName = 'volumeOn_2'
        }

        return `/icons/public/videoControl/${fileName}.svg`
    })

    // 视频元数据加载完成后，更新视频时长和音量
    function handleVideoLoadedMetadata() {
        duration.value = videoRef.value ? videoRef.value.duration : 0
    }
    // 视频时间更新时，更新currentTime
    function handleVideoTimeUpdate() {
        if (isDragging.value) return
        currentTime.value = videoRef.value ? videoRef.value.currentTime : 0
    }

    // 开始播放
    function handleVideoPlay() {
        isPlaying.value = true
    }
    // 暂停播放
    function handleVideoPause() {
        isPlaying.value = false
    }
    // 点击视频
    async function handleVideoClick() {
        if (!videoRef.value) return

        if (isPlaying.value) {
            videoRef.value.pause()
        } else {
            await videoRef.value.play()
        }
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
    // 点击倍速下拉菜单子项
    function handleControlsSpeedDropdownItemClick(speed: number) {
        if (!videoRef.value) return

        speedRate.value = speed
        videoRef.value.playbackRate = speedRate.value
    }
    // 点击音量调节按钮
    function handleControlsVolumeClick() {
        if (!videoRef.value) return

        if (volume.value !== 0) {
            volume.value = 0
        } else {
            volume.value = lastVolume.value === 0 ? 0.1 : lastVolume.value
        }
        videoRef.value.volume = volume.value
    }
    // 音量滑块触发更改
    function handleVolumeSliderInput(value: number) {
        if (!videoRef.value) return

        volume.value = value
        if (volume.value !== 0) {
            lastVolume.value = volume.value
        }
        videoRef.value.volume = volume.value
    }

    onMounted(() => {
        if (videoRef.value) {
            volume.value = videoRef.value.volume
            lastVolume.value = volume.value
            speedRate.value = videoRef.value.playbackRate
        }
    })

    return {
        speeds,
        currentTime,
        duration,
        volume,
        speedRate,
        playbackBtnUrl,
        volumeBtnUrl,
        handleVideoLoadedMetadata,
        handleVideoTimeUpdate,
        handleVideoPlay,
        handleVideoPause,
        handleVideoClick,
        handleVideoSliderMouseDown,
        handleVideoSliderMouseUp,
        handleVideoSliderChange,
        handleControlsPlaybackClick,
        handleControlsSpeedDropdownItemClick,
        handleControlsVolumeClick,
        handleVolumeSliderInput
    }
}

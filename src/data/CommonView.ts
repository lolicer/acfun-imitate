import VideoItem from '@/types/VideoItem.js'
import { Carousel } from '@/types/CommonView.js'

// 轮播图数据
const CarouselData: Carousel[] = Array.from({ length: 4 }, (_, index) => {
    return {
        coverUrl: '/images/commonView/carousel/carousel0.png',
        title: '测试轮播标题' + index
    }
})

// 推荐视频数据
const RecommendVideosData: VideoItem[] = Array.from({ length: 100 }, () => {
    return {
        coverUrl: '/images/commonView/videoCover/no-cover.png',
        title: '测试',
        to: '',
        up: 'TestUploader',
        releaseTime: Date.now() - 2 * 60 * 1000,
        viewCount: 233,
        danmakuCount: 22,
        duration: 33
    }
})

export { CarouselData, RecommendVideosData }

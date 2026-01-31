interface CarouselBangumiData {
    title: string // 标题
    imgUrl: string // 图片地址
    to: string // 跳转链接
    totalEpisodes: number // 总集数
    progress: {
        // 观看进度
        currentEpisode: string | null // 观看到的集数
        currentEpisodeProgress: number // 观看到该集的哪里，区间[0,1]
    }
}

export { CarouselBangumiData }

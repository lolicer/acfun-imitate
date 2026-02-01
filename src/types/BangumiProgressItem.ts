/**
 * @param title 标题
 * @param imgUrl 图片地址
 * @param to 跳转链接
 * @param totalEpisodes 总集数
 * @param progress 观看进度
 * @param progress.currentEpisode 观看到的集数
 * @param progress.currentEpisodeProgress 观看到该集的哪里，区间[0,1]
 */
interface FollowingBangumiData {
    title: string
    imgUrl: string
    to: string
    totalEpisodes: number
    progress: {
        currentEpisode: string | null
        currentEpisodeProgress: number
    }
}

export { FollowingBangumiData }

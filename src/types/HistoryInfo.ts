/**
 * 历史信息
 */
interface HistoryInfoInter {
    /**
     * 图片地址
     */
    imgUrl: string

    /**
     * 地址
     */
    url: string

    /**
     * 标题
     */
    title: string

    /**
     * 观看的时间
     */
    time: number

    /**
     * 观看设备
     */
    device: 'pc' | 'mobile'

    /**
     * UP主名
     */
    uploader: string
}

/**
 * 视频历史信息
 */
interface VideoHistoryInfo extends HistoryInfoInter {
    /**
     * 视频时长
     */
    duration: number

    /**
     * 观看到的地方
     */
    position: number
}

/**
 * 直播历史信息
 */
interface LiveHistoryInfo extends HistoryInfoInter {
    /**
     * 主播是否开播
     * `true`表示直播中，`false`表示未开播
     */
    isLiveOn: boolean
}

/**
 * 文章历史信息
 */
interface ArticleHistoryInfo extends HistoryInfoInter {
    // 暂无额外字段
}

export { VideoHistoryInfo, LiveHistoryInfo, ArticleHistoryInfo }
export type HistoryInfo =
    | VideoHistoryInfo
    | LiveHistoryInfo
    | ArticleHistoryInfo

// 类型守卫函数
export const isVideoHistoryInfo = (
    item: HistoryInfo
): item is VideoHistoryInfo => {
    return 'duration' in item && 'position' in item
}

export const isLiveHistoryInfo = (
    item: HistoryInfo
): item is LiveHistoryInfo => {
    return 'isLiveOn' in item
}

export const isArticleHistoryInfo = (
    item: HistoryInfo
): item is ArticleHistoryInfo => {
    return !isVideoHistoryInfo(item) && !isLiveHistoryInfo(item)
}

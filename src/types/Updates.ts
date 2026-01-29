/**
 * 关注者动态
 */
interface Updates {
    /**
     * 动态类型
     */
    type: 'video' | 'article'

    /**
     * UP主头像地址
     */
    avatarUrl: string

    /**
     * 封面图片地址
     */
    coverUrl: string

    /**
     * UP主名
     */
    uploader: string

    /**
     * 地址
     */
    url: string

    /**
     * 标题
     */
    title: string

    /**
     * 发布时间戳
     */
    releaseTime: number
}

interface LiveStreamer {
    name: string
    avatarUrl: string
}
export { type Updates, type LiveStreamer }

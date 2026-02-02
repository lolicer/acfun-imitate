import VideoItem from './VideoItem.js'

interface SectionRanking {
    /** 封面地址 */
    imgUrl: string
    /** 跳转链接 */
    to: string
    /** 标题 */
    title: string
    /** UP主名字 */
    up: string
    /** 视频秒数 */
    duration: number
}

interface HomeSectionData {
    main: VideoItem[]
    ranking: SectionRanking[]
}

export { type SectionRanking, type HomeSectionData }

interface LiveHeader {
    /** 直播分区 */
    tag: string
    /** 直播间标题 */
    title: string
    /** 封面地址 */
    coverUrl: string
    /** 测试视频地址 */
    videoUrl: string
}

interface RecommendSectionItem {
    /** 分区名称 */
    tag: string
    /** 分区图标地址 */
    imgUrl: string
    /** 下拉菜单 */
    dropdownMenu?: {
        /** 下拉菜单中的分区名称 */
        tag: string
        /** 下拉菜单中的分区图标地址 */
        imgUrl: string
    }[]
}

export { type LiveHeader, type RecommendSectionItem }

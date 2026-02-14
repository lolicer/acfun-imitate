type LiveTags =
    | '游戏'
    | '手机游戏'
    | 'PC游戏'
    | '主机游戏'
    | '虚拟主播'
    | '虚拟Singer'
    | '虚拟Gamer'
    | '虚拟声优'
    | '虚拟日常'
    | '娱乐'
    | '萌宅领域'
    | '视频唱见'
    | '颜值'
    | '舞见'
    | '团播'
    | '电台'
    | '唱见电台'
    | '聊天电台'
    | '聊天室'
    | '交友'
    | '点唱'
    | '兴趣'
    | '一起玩'
    | '生活'
    | '生活杂谈'
    | '情感杂谈'
    | '户外'
    | '萌宠'
    | '美食'
    | '时尚'
    | '手工绘画'
    | '体育运动'
    | '知识'
    | '社会·财经'
    | '教育·学习'
    | '法律·心理'
    | '历史·人文'
    | '科技·科学'
    | '自习室'
    | '时政'

interface RecommendSectionItem {
    /** 分区名称 */
    tag: LiveTags | '更多 >'
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

export { LiveTags, type RecommendSectionItem }

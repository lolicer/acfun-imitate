export default interface LiveItem {
    /** 分区 */
    tag:
        | '虚拟Singer'
        | '虚拟Gamer'
        | '虚拟日常'
        | '虚拟声优'
        | '手游'
        | '单机游戏'
        | '唱见'
        | '舞见'
        | '颜值'
        | '唱见电台'
        | '聊天电台'
    /** 封面地址 */
    coverUrl: string
    /** up主头像地址 */
    avatarUrl: string
    /** 标题 */
    title: string
    /**跳转地址 */
    to: string
    /** UP主名字 */
    up: string
    /** 房间点赞数 */
    likeCount: number
    /** 房间观众数 */
    audienceCount: number
}

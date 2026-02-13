import { LiveTags } from "./Live.js"

export default interface LiveItem {
    /** 分区 */
    tag: LiveTags
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

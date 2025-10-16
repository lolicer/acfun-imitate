export default interface VideoItem {
    /** 封面地址 */
    coverUrl: string;
    /** 标题 */
    title: string;
    /**跳转地址 */
    to: string;
    /** UP主名字 */
    up: string;
    /** 发布时间戳 */
    releaseTime: number;
    /** 观看数量 */
    viewCount: number;
    /** 弹幕数量 */
    bulletScreenCount: number;
    /** 视频时长 */
    duration: number;
}
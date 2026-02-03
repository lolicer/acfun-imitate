/**
 * @param title 标题
 * @param imgUrl 图片地址
 * @param to 跳转链接
 * @param latestEpisode 最新集数
 * @param airSchedule 放送安排
 * @param airSchedule.airWeekday 放送周数
 * @param airSchedule.airTime 放送时间
 * @param tags 标签
 */
interface SeasonalBangumi {
    title: string
    rank: number
    imgUrl: string
    to: string
    latestEpisode: number
    airSchedule: {
        airWeekday: '一' | '二' | '三' | '四' | '五' | '六' | '日'
        airTime: string
    }
    tags: string[]
}

export { SeasonalBangumi }

/**
 * 将时间戳转化为距离今天的相对时间
 * @param timestamp 有毫秒的时间戳
 * @returns
 */
export function formatRelativeTime(timestamp: number): string {
    const now = new Date()
    const inputDate = new Date(timestamp)

    // 获取日期的年月日部分（忽略时间）
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const inputDateOnly = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate()
    )

    // 计算日期差（单位：天）
    const diffTime = nowDate.getTime() - inputDateOnly.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    // 格式化时间部分
    const hours = inputDate.getHours()
    const minutes = inputDate.getMinutes()
    const timeStr = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`

    // 根据日期差返回不同格式
    if (diffDays === 0) {
        return `今天 ${timeStr}`
    } else if (diffDays === 1) {
        return `昨天 ${timeStr}`
    } else if (diffDays === 2) {
        return `前天 ${timeStr}`
    } else {
        // 超过前天，显示月/日格式
        const month = inputDate.getMonth() + 1 // 月份从0开始，需要+1
        const day = inputDate.getDate()
        return `${month}/${day < 10 ? '0' + day : day} ${timeStr}`
    }
}

/**
 * 将秒数转为时分秒
 * @param seconds 秒数
 * @returns
 */
export function formatSeconds(seconds: number): string {
    // 确保秒数为非负整数
    const totalSeconds = Math.max(0, Math.floor(seconds))

    // 计算小时、分钟、秒
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60

    // 格式化数字，保证长度为2（不使用padStart）
    const formatNumber = (num: number): string => {
        return num < 10 ? '0' + num : '' + num
    }

    // 如果小于1小时，只显示分:秒
    if (hours === 0) {
        if (minutes < 10) return `0${minutes}:${formatNumber(secs)}`
        else return `${minutes}:${formatNumber(secs)}`
    }

    // 大于等于1小时，显示时:分:秒
    return `${hours}:${formatNumber(minutes)}:${formatNumber(secs)}`
}

/**
 * 将数字转换为有单位的数字
 */
export function formatNumber(num: number): string {
    if (num < 10000) {
        return num.toString()
    } else if (num < 100000000) {
        return Math.round((num / 10000) * 10) / 10 + '万'
    } else {
        return Math.round((num / 100000000) * 10) / 10 + '亿'
    }
}

/**
 * 将时间戳转换为日期字符串
 * @param timestamp 时间戳（毫秒）
 * @returns 格式化的日期字符串
 */
export function formatTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp)
    const now = new Date()

    // 计算时间差（毫秒）
    const diff = now.getTime() - timestamp
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    // 60秒内：返回xx秒前
    if (seconds < 60) {
        return `${seconds}秒前`
    }
    // 60分钟内：返回xx分钟前
    else if (minutes < 60) {
        return `${minutes}分钟前`
    }
    // 24小时内：返回xx小时前
    else if (hours < 24) {
        return `${hours}小时前`
    }
    // 7天内：返回xx天前
    else if (days < 7) {
        return `${days}天前`
    }
    // 超过7天，按日期格式显示
    else {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 // 月份从0开始，需要+1
        const day = date.getDate()

        // 获取当前年份
        const currentYear = now.getFullYear()

        // 月日前面不补零
        if (year === currentYear) {
            // 今年：省略年份
            return `${month}-${day}`
        } else {
            // 非今年：显示完整年月日
            return `${year}-${month}-${day}`
        }
    }
}

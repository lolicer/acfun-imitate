// 获取CSS变量
export function getCssVar(
    name: string,
    elem: HTMLElement = document.documentElement
) {
    return getComputedStyle(elem).getPropertyValue(name).trim()
}

// 获取弹幕颜色
export function getDanmakuColor(color: string): string {
    return `var(--color-danmaku-${color})`
}

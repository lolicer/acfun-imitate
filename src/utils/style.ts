// 获取CSS变量
export function getCssVar(
    name: string,
    elem: HTMLElement = document.documentElement
) {
    return getComputedStyle(elem).getPropertyValue(name).trim()
}

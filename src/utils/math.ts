/**
 * 将一个数组洗牌，改变其顺序
 */
function shuffle<T>(array: T[]): T[] {
    // 创建数组副本以避免修改原数组
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // 生成 0 到 i 之间的随机整数
        const j = Math.floor(Math.random() * (i + 1))
        // 交换元素 [ES6 解构赋值写法]
        ;[shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i]
        ]
    }
    return shuffledArray
}

export { shuffle }
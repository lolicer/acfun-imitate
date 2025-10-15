/**
 * 绘制封面的缩略图（保持比例，从两侧均匀裁剪）
 * @param canvas canvas元素
 * @param imgUrl 图片路径
 * @param width 宽度，默认为124
 * @param height 高度，默认为63
 */
export function drawThumbnail(
    canvas: HTMLCanvasElement, 
    imgUrl: string, 
    width: number = 124, 
    height: number = 63
) {
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    if (!ctx) return
    
    const img = new Image()
    img.onload = function() {
        // 计算原图和目标容器的比例
        const imgRatio = img.width / img.height
        const containerRatio = width / height
        
        let sourceX = 0
        let sourceY = 0
        let sourceWidth = img.width
        let sourceHeight = img.height
        
        if (imgRatio > containerRatio) {
            // 原图更宽，需要裁剪左右两侧
            sourceWidth = img.height * containerRatio
            sourceX = (img.width - sourceWidth) / 2
        } else {
            // 原图更高，需要裁剪上下两侧
            sourceHeight = img.width / containerRatio
            sourceY = (img.height - sourceHeight) / 2
        }
        
        // 清除画布
        ctx.clearRect(0, 0, width, height)
        
        // 从原图裁剪并绘制到canvas
        ctx.drawImage(
            img,
            sourceX, sourceY, sourceWidth, sourceHeight, // 源图像裁剪区域
            0, 0, width, height // 目标canvas区域
        )
    }
    img.src = imgUrl
}
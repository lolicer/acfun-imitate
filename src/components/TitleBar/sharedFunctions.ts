/**
 * 将时间戳转化为距离今天的相对时间
 * @param timestamp 有毫秒的时间戳
 * @returns 
 */
export function formatRelativeTime(timestamp: number): string {
  const now = new Date();
  const inputDate = new Date(timestamp);
  
  // 获取日期的年月日部分（忽略时间）
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inputDateOnly = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
  
  // 计算日期差（单位：天）
  const diffTime = nowDate.getTime() - inputDateOnly.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // 格式化时间部分
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const timeStr = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
  // 根据日期差返回不同格式
  if (diffDays === 0) {
    return `今天 ${timeStr}`;
  } else if (diffDays === 1) {
    return `昨天 ${timeStr}`;
  } else if (diffDays === 2) {
    return `前天 ${timeStr}`;
  } else {
    // 超过前天，显示月/日格式
    const month = inputDate.getMonth() + 1; // 月份从0开始，需要+1
    const day = inputDate.getDate();
    return `${month}/${day < 10 ? '0' + day : day} ${timeStr}`;
  }
}

/**
 * 将秒数转为时分秒
 * @param seconds 秒数
 * @returns 
 */
export function formatSeconds(seconds: number): string {
  // 确保秒数为非负整数
  const totalSeconds = Math.max(0, Math.floor(seconds));
  
  // 计算小时、分钟、秒
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  
  // 格式化数字，保证长度为2（不使用padStart）
  const formatNumber = (num: number): string => {
    return num < 10 ? '0' + num : '' + num;
  };
  
  // 如果小于1小时，只显示分:秒
  if (hours === 0) {
    return `${minutes}:${formatNumber(secs)}`;
  }
  
  // 大于等于1小时，显示时:分:秒
  return `${hours}:${formatNumber(minutes)}:${formatNumber(secs)}`;
}

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
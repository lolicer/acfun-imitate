import VideoItem from '@/types/VideoItem.js'
import { SideVideoItem } from '@/types/SideVideoItem.js'

interface HomeSection {
    main: VideoItem[]
    ranking: SideVideoItem[]
}

export { type SideVideoItem, type HomeSection }

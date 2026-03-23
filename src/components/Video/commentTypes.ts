import type { CommentBase, ChildComment, RootComment } from '@/types/Video.js'

/** 组件层评论基类：复用全局评论字段，补充本地状态字段 */
export interface CommentNodeBase extends CommentBase {
    id: string
    isLiked: boolean
}

/** 子评论节点 */
export interface ChildCommentNode extends ChildComment, CommentNodeBase {}

/** 根评论节点：复用评论项结构并覆盖 children 类型 */
export interface RootCommentNode
    extends Omit<RootComment, 'children'>, CommentNodeBase {
    children: ChildCommentNode[] | null
    /** 是否为当前用户本地新发评论 */
    isLocalNew: boolean
}

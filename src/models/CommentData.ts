/**
 * Represents a single comment.
 */
export default class CommentData {
  id: any;
  author: string;
  message: string;
  likeCount: number;
  replies: CommentData[];
  currentUserLiked = false;
}
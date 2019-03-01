/**
 * Represents a single comment.
 */
export default class CommentData {
  id: any;
  author: string;
  message: string;
  likeCount: number;
  reported: boolean;
  replies: CommentData[];
  currentUserLiked = false;
}
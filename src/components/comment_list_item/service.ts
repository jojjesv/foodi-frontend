import { request } from "../../service/backend";
import { getUUID } from "../../service/user";

/**
 * Likes a specific comment.
 */
export async function likeComment(commentId: any) {
  await request(`/comments/${commentId}/like`, 'post', {
    senderIdentifier: getUUID()
  })
}
/**
 * Repors a specific comment.
 */
export async function reportComment(commentId: any) {
  await request(`/comments/${commentId}/report`, 'post')
}
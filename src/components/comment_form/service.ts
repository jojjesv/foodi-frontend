import { request } from "../../service/backend";

/**
 * Submits a comment to a recipe.
 */
export async function submitComment(author: string, message: string, recipeId: any, replyTo: any) {
  await request(`/recipes/${recipeId}/comments`, 'post', {
    author,
    message,
    replyTo
  });
}
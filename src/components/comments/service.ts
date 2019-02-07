import CommentData from "../../models/CommentData";

/**
 * Fetches comments for a recipe.
 */
export async function fetchComments(recipeId: any): Promise<CommentData[]> {
  return [{
    author: 'Johan Sv',
    currentUserLiked: true,
    id: 12,
    likeCount: 0,
    message: 'Very gut very nice'
  }, {
    author: 'Albert',
    currentUserLiked: true,
    id: 131,
    likeCount: 2,
    message: 'I disagree'
  }];
}
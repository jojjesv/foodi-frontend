import RecipeInfo from "../../models/RecipeInfo";
import { request } from "../../service/backend";

/**
 * Fetches extensive recipe info.
 */
export async function fetchRecipeInfo(recipeId: any): Promise<RecipeInfo> {
  let result = await request(`/recipes/${recipeId}`);

  return result;
}
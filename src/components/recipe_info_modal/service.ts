import RecipeInfo from "../../models/RecipeInfo";
import { request } from "../../service/backend";
import { getUUID } from "../../service/user";

/**
 * Fetches extensive recipe info.
 */
export async function fetchRecipeInfo(recipeId: any): Promise<RecipeInfo> {
  let result = await request(`/recipes/${recipeId}?sid=${encodeURIComponent(getUUID())}`);

  return result;
}
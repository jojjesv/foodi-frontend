import RecipePreview from "../../models/RecipePreview";
import { request } from "../../service/backend";

/**
 * Fetches all recipe previews.
 */
export async function fetchRecipePreviews(): Promise<RecipePreview[]> {
  let result = await request("/recipes");
  return result;
}
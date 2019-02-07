import RecipePreview from "../../models/RecipePreview";

/**
 * Fetches all recipe previews.
 */
export async function fetchRecipePreviews(): Promise<RecipePreview[]> {
  return [
    {
      id: 123,
      imageUrl: 'https://via.placeholder.com/64x64',
      name: 'Recipe 1'
    },
    {
      id: 234,
      imageUrl: 'https://via.placeholder.com/128x64',
      name: 'Recipe 2'
    }
  ];
}
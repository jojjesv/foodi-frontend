import RecipeInfo from "../../models/RecipeInfo";

/**
 * Fetches extensive recipe info.
 */
export async function fetchRecipeInfo(recipeId: any): Promise<RecipeInfo> {
  return {
    id: recipeId,
    categories: ["kött", "vegatriskt"],
    description: "Gör traditionella tunna pannkakor genom att blanda mjöl, mjölk och ägg och lite salt till en jämn smet. Stek smeten till tunna och smarriga pannkakor och servera med en söt sylt.",
    imageUrl: "https://via.placeholder.com/64x64",
    ingredients: ["mjöl", "smör"],
    name: "Recipe 1",
    steps: [
      {
        position: 1,
        text: "Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen."
      },
      {
        position: 2,
        text: "Smält smöret i stekpannan och vispa ner i smeten. Stek tunna pannkakor av smeten i en stek- eller pannkakspanna."
      }
    ]
  };
}
import RecipePreview from "./RecipePreview";
import StepData from "./StepData";

/**
 * Represents extensive recipe info.
 */
export default class RecipeInfo extends RecipePreview {
  description: string;
  categories: string[];
  ingredients: string[];
  steps: StepData[];
}
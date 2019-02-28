import RecipePreview from "./RecipePreview";
import StepData from "./StepData";
import Ingredient from "./Ingredient";
import CommentData from "./CommentData";

/**
 * Represents extensive recipe info.
 */
export default class RecipeInfo extends RecipePreview {
  description: string;
  categories: string[];
  ingredients: Ingredient[];
  steps: StepData[];
  comments: CommentData[];
}
import * as React from 'react';
import RecipePreview from '../../models/RecipePreview';

interface Props {
  onRecipeClicked: (data: RecipePreview) => void;
}

class State {
  items: RecipePreview[] = [];
}

/**
 * Fetches and renders a list of recipes.
 */
export default class RecipeList extends React.Component<Props, State> {
  state = new State();

  componentDidMount(){
    this.fetchRecipes();
  }
  
  async fetchRecipes() {

  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
import * as React from 'react';

/**
 * Fetches and renders a list of recipes.
 */
export default class RecipeList extends React.Component {
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
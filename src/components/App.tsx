import * as React from 'react';
import RecipeList from './recipe_list';
import RecipeInfo from '../models/RecipeInfo';
import RecipeInfoModal from './recipe_info_modal';

class State {
  recipeInfoId?: any;
}

/**
 * Top-level app component. Renders recipe list and recipe info.
 */
export default class App extends React.Component<any, State> {
  state = new State();
  
  showRecipeInfo(recipeId: any) {
    this.setState({
      recipeInfoId: recipeId
    })
  }

  render() {
    let { state } = this;

    return (
      <div>
        <RecipeList
          onRecipeClicked={d => this.showRecipeInfo(d.id)}
        />
        {
          state.recipeInfoId ? (
            <RecipeInfoModal
              recipeId={state.recipeInfoId}
            />
          ) : null
        }
      </div>
    )
  }
}
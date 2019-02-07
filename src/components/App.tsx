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
  render() {
    let { state } = this;

    return (
      <div>
        <RecipeList />
        {
          state.recipeInfoId ? (
            <RecipeInfoModal

            />
          ) : null
        }
      </div>
    )
  }
}
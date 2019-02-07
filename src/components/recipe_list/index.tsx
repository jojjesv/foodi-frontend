import * as React from 'react';
import RecipePreview from '../../models/RecipePreview';
import { fetchRecipePreviews } from './service';
import RecipeListItem from '../recipe_list_item';
import './styles.scss';

interface Props {
  onRecipeClicked: (data: RecipePreview) => void;
}

class State {
  fetchingItems = false;
  items: RecipePreview[] = [];
}

/**
 * Fetches and renders a list of recipes.
 */
export default class RecipeList extends React.Component<Props, State> {
  state = new State();

  componentDidMount() {
    this.fetchRecipes();
  }

  async fetchRecipes() {
    this.setState({
      fetchingItems: true
    })

    let items = await fetchRecipePreviews();

    this.setState({
      items,
      fetchingItems: false
    })
  }

  render() {
    let { state, props } = this;
    let { items } = state;

    return (
      <div className="recipe-list-container">
        {
          state.fetchingItems ? (
            <div>Loadingu loadingu...</div>
          ) : (
              <ul className="recipe-list">
                {
                  items.map(e => (
                    <li>
                      <RecipeListItem data={e} onClick={_ => {
                        props.onRecipeClicked(e);
                      }} />
                    </li>
                  ))
                }
              </ul>
            )
        }
      </div>
    )
  }
}
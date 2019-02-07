import * as React from 'react';
import RecipeInfo from '../../models/RecipeInfo';
import { fetchRecipeInfo } from './service';
import StepList from '../step_list';
import './styles.scss';

class State {
  fetchingData = false;
  data: RecipeInfo;
}

interface Props {
  recipeId: any;
}

/**
 * Modal component which fetches and renders recipe info.
 */
export default class RecipeInfoModal extends React.Component<Props, State> {
  state = new State()

  componentDidMount() {
    this.fetchInfo();
  }

  /**
   * Fetches complete recipe info.
   */
  async fetchInfo() {
    let { props } = this;

    this.setState({
      fetchingData: true
    })

    let { recipeId } = props;
    let data = await fetchRecipeInfo(recipeId);

    this.setState({
      data,
      fetchingData: false
    })
  }

  render() {
    let { state } = this;
    let { data, fetchingData } = state;

    return (
      <div className="modal-container">
        <div className="modal recipe-info">

          {
            state.fetchingData ? (
              <div>Loading...</div>
            ) : !!data ? (
              <>
                <div className="cover-img" role="img" style={{
                  backgroundImage: `url(${data.imageUrl})`
                }}>
                </div>

                <div className="padded-content">
                  <h1 className="title">{data.name}</h1>
                  <p className="description">{data.description}</p>

                  <p className="categories">
                    <span className="icon fas fa-tag"></span>
                    {data.ingredients.join(", ")}
                  </p>

                  <h2>Ingredients ({data.ingredients.length})</h2>
                  <p className="ingredients">{data.ingredients.join(", ")}</p>


                  <h2>Steps ({data.steps.length})</h2>
                  <StepList data={data.steps} />
                </div>
              </>
            ) : null
          }

        </div>
      </div>
    )
  }
}
import * as React from 'react';
import RecipeInfo from '../../models/RecipeInfo';
import { fetchRecipeInfo } from './service';

class State {
  fetchinData = false;
  data: RecipeInfo;
}

interface Props {
  recipeId: any;
}

/**
 * Modal component which fetches and renders recipe info.
 */
export default class RecipeInfoModal extends React.Component<Props, State> {

  componentDidMount() {
    this.fetchInfo();
  }

  /**
   * Fetches complete recipe info.
   */
  async fetchInfo() {
    let { props } = this;

    this.setState({
      fetchinData: true
    })

    let { recipeId } = props;
    let data = await fetchRecipeInfo(recipeId);

    this.setState({
      data,
      fetchinData: false
    })
  }

  render() {
    let { state } = this;
    let { data, fetchinData } = state;

    return (
      <div className="modal-container">
        <div className="modal recipe-info">

          {
            state.fetchinData ? (
              <div>Loading...</div>
            ) : (
                <>
                  <div className="cover-img" role="img" style={{
                    backgroundImage: `url(${data.imageUrl})`
                  }}>
                  </div>

                  <h1 className="title">{data.name}</h1>
                </>
              )
          }

        </div>
      </div>
    )
  }
}
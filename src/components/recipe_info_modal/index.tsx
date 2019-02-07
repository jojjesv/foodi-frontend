import * as React from 'react';

class State {

}

interface Props {
  recipeId: any;
}

/**
 * Modal component which fetches and renders recipe info.
 */
export default class RecipeInfoModal extends React.Component<Props, State> {
 
  componentDidMount(){
    this.fetchInfo();
  }

  /**
   * Fetches complete recipe info.
   */
  async fetchInfo(){

  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal">

        </div>
      </div>
    )
  }
}
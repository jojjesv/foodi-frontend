import * as React from 'react';

class State {

}

interface Props {

}

/**
 * Fetches and renders a list of comments.
 */
export default class CommentList extends React.Component<Props, State> {
  componentDidMount(){
    this.fetchComments();
  }

  /**
   * Fetches all comments for the specific recipe.
   */
  async fetchComments() {
    
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
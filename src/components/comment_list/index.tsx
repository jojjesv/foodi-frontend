import * as React from 'react';
import CommentData from '../../models/CommentData';
import { fetchComments } from './service';
import CommentListItem from '../comment_list_item';

class State {
  fetchingItems = false;
  items: CommentData[] = [];
}

interface Props {
  recipeId: any;
}

/**
 * Fetches and renders a list of comments.
 */
export default class CommentList extends React.Component<Props, State> {
  componentDidMount() {
    this.fetchComments();
  }

  /**
   * Fetches all comments for the specific recipe.
   */
  async fetchComments() {
    let { props } = this;
    this.setState({
      fetchingItems: true
    })

    let { recipeId } = props;

    let items = await fetchComments(recipeId);

    this.setState({
      items,
      fetchingItems: false
    })
  }

  render() {
    let { state } = this;
    let { items } = state;

    return (
      <div className="comment-list-container">
        {
          state.fetchingItems ? (
            <div>Loading...</div>
          ) : null
        }
        <ul className="comment-list">
          {
            items.map(e => (
              <li>
                <CommentListItem data={e} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
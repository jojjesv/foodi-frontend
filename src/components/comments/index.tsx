import * as React from 'react';
import CommentData from '../../models/CommentData';
import { fetchComments } from './service';
import CommentListItem from '../comment_list_item';
import CommentForm from '../comment_form';
import './styles.scss';

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
export default class Comments extends React.Component<Props, State> {
  state = new State();
  
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
    let { state, props } = this;
    let { items } = state;

    let { recipeId } = props;

    return (
      <div className="comment-list-container">
        {
          state.fetchingItems ? (
            <div>Loading...</div>
          ) : (
              <>
                <h2>Comments ({items.length})</h2>
                <ul className="comment-list">
                  {
                    items.map(e => (
                      <li>
                        <CommentListItem data={e} />
                      </li>
                    ))
                  }
                </ul>

                <CommentForm recipeId={recipeId} />
              </>
            )
        }
      </div>
    )
  }
}
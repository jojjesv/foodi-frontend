import * as React from 'react';
import CommentData from '../../models/CommentData';
import CommentListItem from '../comment_list_item';
import CommentForm from '../comment_form';
import './styles.scss';

class State {
  fetchingItems = false;
}

interface Props {
  recipeId: any;
  comments: CommentData[];
}

/**
 * Fetches and renders a list of comments.
 */
export default class Comments extends React.Component<Props, State> {
  state = new State();

  render() {
    let { state, props } = this;

    let { recipeId, comments } = props;

    return (
      <div className="comment-list-container">
        {
          state.fetchingItems ? (
            <div>Loading...</div>
          ) : (
              <>
                <h2>Comments ({comments.length})</h2>
                <ul className="comment-list">
                  {
                    comments.map(e => (
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
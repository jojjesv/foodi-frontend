import * as React from 'react';
import CommentData from '../../models/CommentData';
import { likeComment } from './service';

interface Props {
  data: CommentData;
}

/**
 * Renders a single comment.
 */
export default class CommentListItem extends React.Component<Props> {
  /**
   * Likes this comment.
   */
  likeComment() {
    let { props } = this;
    let { data } = props;

    if (data.currentUserLiked) {
      //  Already liked
      return
    }

    likeComment(data.id);

    data.currentUserLiked = true;
  }

  render() {
    let { props } = this;
    let { data } = props;

    return (
      <div className="comment-item">
        <div className="toolbar">
          <h3 className="author">{data.author}</h3>

          <a role="button" className="button" title="Report this comment">
            <span className=""></span>
          </a>
          <a role="button" className="button" title="Like this comment">
            <span className=""></span>
          </a>
        </div>
        <p className="message">{data.author}</p>
      </div>
    )
  }
}
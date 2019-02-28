import * as React from 'react';
import CommentData from '../../models/CommentData';
import { likeComment } from './service';
import './styles.scss';
import classNames from 'classnames';

interface Props {
  data: CommentData;
  isReply?: boolean;
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
      <div className={classNames({
        "comment-item": true,
        "reply": props.isReply
      })}>
        <div className="toolbar">
          <h3 className="author">
            {data.author}
            <span className="like-count">
              (+{data.likeCount})
            </span>
          </h3>

          <a role="button" className="button" title="Report this comment">
            <span className="fas fa-flag"></span>
          </a>
          <a role="button" className="button" title="Like this comment">
            <span className="fas fa-flag"></span>
          </a>
        </div>
        <p className="message">{data.message}</p>

        {
          data.replies.length ? (
            <ul>
              {
                data.replies.map(reply => (
                  <li key={reply.id}>
                    <CommentListItem data={reply} isReply />
                  </li>
                ))
              }
            </ul>
          ) : null
        }
      </div>
    )
  }
}
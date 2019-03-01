import * as React from 'react';
import CommentData from '../../models/CommentData';
import { likeComment, reportComment } from './service';
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

    if (data.currentUserLiked || !data.id) {
      //  Already liked or newely created
      return
    }

    likeComment(data.id);

    data.currentUserLiked = true;
    this.forceUpdate();
  }

  /**
   * Reports this comment.
   */
  async reportComment() {
    let { props } = this;
    let { data } = props;

    if (data.reported || !data.id) {
      //  Already reported or newely created
      return
    }

    reportComment(data.id);

    data.reported = true;
    this.forceUpdate();
  }

  render() {
    let { props } = this;
    let { data } = props;

    return (
      <div className={classNames({
        "comment-item": true,
        "reported": data.reported,
        "reply": props.isReply
      })}>
        <div className="toolbar">
          <h3 className="author">
            {data.author}
            <span className="like-count">
              (+{data.likeCount})
            </span>
          </h3>

          <a role="button" className="button flag"
            title="Report this comment" onClick={() => this.reportComment()}>
            <span className="fas fa-flag"></span>
          </a>
          <a role="button" className="button like"
            title="Like this comment" onClick={() => this.likeComment()}>
            <span className="fas fa-heart"></span>
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
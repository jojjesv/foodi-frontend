import * as React from 'react';
import CommentData from '../../models/CommentData';

interface Props {
  data: CommentData;
}

/**
 * Renders a single comment.
 */
export default class CommentListItem extends React.Component<Props> {
  render() {
    return (
      <div>
        <h3></h3>
      </div>
    )
  }
}
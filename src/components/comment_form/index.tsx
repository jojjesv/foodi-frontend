import * as React from 'react';
import CommentData from '../../models/CommentData';
import { submitComment } from './service';
import './styles.scss';

interface Props {
  allComments: CommentData[];
  recipeId: any;
  onSubmittedComment: (data: CommentData) => void;
}

class State {
  submitting = false;
  inputAuthor: string;
  inputMessage: string;
  inputReplyToId?: string;
  addedComment?: CommentData;
}

class CommenReplyOption {
  text: string;
  commentId: string;
}

/**
 * Form for inputting a comment.
 */
export default class CommentForm extends React.Component<Props, State> {
  state = new State();

  async submit() {
    let { props, state } = this;

    this.setState({
      submitting: false
    })

    let { recipeId } = props;

    try {
      await submitComment(state.inputAuthor, state.inputMessage, recipeId, state.inputReplyToId);
    } catch (e) {
      console.error(e);
      this.setState({
        submitting: false
      })
      return
    }

    props.onSubmittedComment({
      author: state.inputAuthor,
      currentUserLiked: false,
      id: null,
      likeCount: 0,
      message: state.inputMessage,
      replies: [],
      reported: false
    })

    this.setState({
      submitting: true,
      inputAuthor: null,
      inputMessage: null,
      inputReplyToId: null
    })
  }

  get replyOptions(): CommenReplyOption[] {
    let { allComments: comments } = this.props;
    if (!comments || !comments.length) {
      return [];
    }

    let options: CommenReplyOption[] = [];
    comments.forEach(c => {
      if (c.replies.length == 0) {
        //  is top level
        options.push({ commentId: c.id, text: `${c.author}: ${c.message}` })
      }
    });

    return options;
  }

  render() {
    let { state } = this;

    return (
      <div>
        <form className="comment-form" onSubmit={e => {
          e.preventDefault();
          this.submit();
        }}>
          <div className="field">
            <label className="label"
              htmlFor="comment-input-author">Your (honest) name</label>
            <input
              id="comment-input-author"
              name="author"
              value={state.inputAuthor}
              onChange={e => {
                this.setState({
                  inputAuthor: e.currentTarget.value.trim()
                })
              }} />
          </div>
          <div className="field">
            <label className="label"
              htmlFor="comment-input-message">Comment</label>
            <textarea id="comment-input-message" name="message" onChange={e => {
              this.setState({
                inputMessage: e.currentTarget.value.trim()
              })
            }}
            value={state.inputMessage}></textarea>
          </div>
          <div className="field">
            <label className="label"
              htmlFor="comment-input-reply">Reply to</label>
            <select
              id="comment-input-reply"
              onChange={e => this.setState({ inputReplyToId: (e.target as HTMLSelectElement).value })}
              name="reply">
              <option selected={state.inputReplyToId == null}></option>
              {
                this.replyOptions.map(opt => (
                  <option key={opt.commentId} value={opt.commentId}
                    selected={state.inputReplyToId == opt.commentId}>{opt.text}</option>
                ))
              }
            </select>
          </div>
          <div className="submit-container">
            <button type="submit">
              <span className="fas fa-chevron-right"></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
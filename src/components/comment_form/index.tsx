import * as React from 'react';
import { submitComment } from './service';
import './styles.scss';

interface Props {
  recipeId: any;
}

class State {
  submitting = false;
  inputAuthor: string;
  inputMessage: string;
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

    await submitComment(state.inputAuthor, state.inputMessage, recipeId);

    this.setState({
      submitting: true
    })
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
              htmlFor="comment-input-author">Your name</label>
            <input
              id="comment-input-author"
              name="author" onChange={e => {
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
            }}>
              {
                state.inputMessage
              }
            </textarea>
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
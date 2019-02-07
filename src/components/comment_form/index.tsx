import * as React from 'react';
import { submitComment } from './service';

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
        <form>
          <input name="author" onChange={e => {
            this.setState({
              inputAuthor: e.currentTarget.value.trim()
            })
          }} />
          <input name="message" onChange={e => {
            this.setState({
              inputMessage: e.currentTarget.value.trim()
            })
          }} />
        </form>
      </div>
    )
  }
}
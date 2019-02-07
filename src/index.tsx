import * as React from 'react';
import {
  render
} from 'react-dom';
import App from './components/App';
import './modal.scss';
import './styles.scss';
import './form.scss';

window.onload = () => {
  render(<App />, document.getElementById('app-root'))
}
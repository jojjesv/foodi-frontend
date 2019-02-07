import * as React from 'react';
import StepData from '../../models/StepData';
import './styles.scss';

interface Props {
  data: StepData[]
}

export default class StepList extends React.PureComponent<Props> {
  render() {
    let { props } = this;
    let { data } = props;

    return (
      <ul className="step-list">
        {
          data.map(e => (
            <li key={e.position.toString()}>
              <div className="step">
                <div className="position-container">
                  <p className="position">{e.position}</p>
                </div>
                <div className="text-container">
                  <p className="text">{e.text}</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
}
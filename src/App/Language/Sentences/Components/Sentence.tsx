import * as React from 'react';
import { SentenceState } from '../Modules';

interface Props {
  state: SentenceState;
}

export class Sentence extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <p>{this.props.state.original}</p>
        <p>{this.props.state.translation}</p>
      </div>
    );
  }
}
import * as React from 'react';
import { SentenceState } from '../Modules';

interface Props {
  value: SentenceState;
}

export class Sentence extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <p>{this.props.value.original}</p>
        <p>{this.props.value.translation}</p>
      </div>
    );
  }
}
import * as React from 'react';
import { SentenceState } from '../Modules';
import { Sentence } from './Sentence';

interface Props {
  value: SentenceState[];
}

export class SentenceList extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.value.map((sentence) => (
          <Sentence value={sentence}/>
        ))}
      </div>
    );
  }
}
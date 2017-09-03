import * as React from 'react';
import { Sentence } from './Sentence';
import { SentenceState } from '../Modules';

interface Props {
  value: SentenceState[];
}

export class SentenceList extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.value.map((sentence) => (
          <Sentence key={sentence.id} value={sentence}/>
        ))}
      </div>
    );
  }
}
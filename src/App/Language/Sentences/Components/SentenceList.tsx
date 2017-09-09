import * as React from 'react';
import { Sentence } from './Sentence';
import { SentenceState } from '../Modules';

interface Props {
  state: SentenceState[];
}

export class SentenceList extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.state.map((sentence) => (
          <Sentence key={sentence.id} state={sentence}/>
        ))}
      </div>
    );
  }
}
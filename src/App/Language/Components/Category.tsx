import * as React from 'react';
import { LanguageState } from '../Modules';
import { SentenceList } from './SentenceList';
import { AddSentence } from './AddSentence';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';

interface Props {
  value: LanguageState;
  dispatch: Dispatch<ReduxAction>;
}

export class Category extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>{this.props.value.name}</h2>
        <AddSentence dispatch={this.props.dispatch}/>
        <SentenceList value={this.props.value.sentences}/>
      </div>
    );
  }
}
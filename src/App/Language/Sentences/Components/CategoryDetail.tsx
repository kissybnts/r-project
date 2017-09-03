import * as React from 'react';
import { SentenceList } from './SentenceList';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { CategoryDetailState } from '../Modules';
import { AddSentence } from './AddSentence';

interface Props {
  value: CategoryDetailState;
  dispatch: Dispatch<ReduxAction>;
}

export class CategoryDetail extends React.Component<Props, {}> {
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
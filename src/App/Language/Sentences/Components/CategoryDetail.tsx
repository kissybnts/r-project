import * as React from 'react';
import { SentenceList } from './SentenceList';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { CategoryDetailState } from '../Modules';
import { AddSentence } from './AddSentence';

interface Props {
  state: CategoryDetailState;
  dispatch: Dispatch<ReduxAction>;
}

export class CategoryDetail extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>{this.props.state.name}</h2>
        <AddSentence state={({userId: this.props.state.userId, categoryId: this.props.state.id})} dispatch={this.props.dispatch}/>
        <SentenceList state={this.props.state.sentences}/>
      </div>
    );
  }
}
import * as React from 'react';
import { createSentenceCreateAction } from '../ActionCreators';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { AddSentenceState } from '../Modules';

interface Props {
  state: AddSentenceState;
  dispatch: Dispatch<ReduxAction>;
}

export class AddSentence extends React.Component<Props, {}> {
  private original: HTMLInputElement;
  private translation: HTMLInputElement;

  createSentence() {
    this.props.dispatch(createSentenceCreateAction(this.props.state.categoryId, this.original.value, this.translation.value));
    this.original.value = '';
    this.translation.value = '';
  }

  render() {
    return (
      <div>
        <input ref={(node) => { if (node) { this.original = node; } }}/>
        <input ref={(node) => { if (node) { this.translation = node; } }}/>
        <button onClick={() => this.createSentence()}>Add</button>
      </div>
    );
  }
}
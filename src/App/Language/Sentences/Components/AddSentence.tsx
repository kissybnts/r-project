import * as React from 'react';
import { getSentenceCreateAction } from '../ActionCreators';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { sentencesApi } from '../../../../API/SentencesAPI';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

const AddSentenceActionCreators = {
  create: getSentenceCreateAction
};

export class AddSentence extends React.Component<Props, {}> {
  private original: HTMLInputElement;
  private translation: HTMLInputElement;

  createSentence() {
    this.props.dispatch(AddSentenceActionCreators.create(this.original.value, this.translation.value));
    sentencesApi.createSentence(1, 1, this.original.value, this.translation.value);
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
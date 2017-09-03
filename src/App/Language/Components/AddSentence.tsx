import * as React from 'react';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { getSentenceCreateAction } from '../ActionCreators';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

const AddSentenceActionCreators = {
  create: getSentenceCreateAction
};

export class AddSentence extends React.Component<Props, {}> {
  private original: HTMLInputElement;
  private translation: HTMLInputElement;

  render() {
    return (
      <div>
        <input ref={(node) => { if (node) { this.original = node; } }}/>
        <input ref={(node) => { if (node) { this.translation = node; } }}/>
        <button onClick={() => this.props.dispatch(AddSentenceActionCreators.create(this.original.value, this.translation.value))}>Add</button>
      </div>
    );
  }
}
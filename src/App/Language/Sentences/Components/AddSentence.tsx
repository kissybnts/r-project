import * as React from 'react';
import { createSentenceCreateRequestAction } from '../ActionCreators';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { AddSentenceState } from '../Modules';

interface Props {
  state: AddSentenceState;
  dispatch: Dispatch<ReduxAction>;
}

interface ComponentState {
  original: string;
  translation: string;
}

export class AddSentence extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
    this.initComponentState();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    return (
      <div>
        <input name="original" onChange={this.handleOnChange}/>
        <input name="translation" onChange={this.handleOnChange}/>
        <button onClick={this.handleOnClick}>Add</button>
      </div>
    );
  }

  private initComponentState() {
    this.state = {
      original: '',
      translation: ''
    };
  }

  private handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
  }

  private handleOnClick() {
    this.props.dispatch(createSentenceCreateRequestAction(this.props.state.categoryId, this.state.original, this.state.translation));
    this.initComponentState();
  }
}
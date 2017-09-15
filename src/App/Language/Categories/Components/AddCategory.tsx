import * as React from 'react';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { createCategoryCreateAction } from '../ActionCreators';

export interface Props {
  dispatch: Dispatch<ReduxAction>;
}

export interface ComponentState {
  name: string;
}

export class AddCategory extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
    this.initComponentState();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name: <input type="text" id="name" name="name" onChange={this.handleOnChange}/></label>
        <button onClick={this.handleOnClick}>Add</button>
      </div>
    );
  }

  private initComponentState() {
    this.state = {
      name: ''
    }
  }

  private handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
  }

  private handleOnClick() {
    this.props.dispatch(createCategoryCreateAction(this.state.name));
    this.initComponentState();
  }
}
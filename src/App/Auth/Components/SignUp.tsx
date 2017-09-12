import * as React from 'react';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { createSignUpRequestAction } from '../ActionCreators';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

interface ComponentState {
  name: string;
  email: string;
  password: string;
}

export class SignUp extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
    this.initComponentState();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form>
          <label htmlFor="name">Name: <input id="name" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="User name"/></label>
          <label>Email: <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleOnChange}/></label>
          <label>Password: <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleOnChange}/></label>
          <input type="button" value="SignUp" onClick={this.handleOnClick}/>
        </form>
      </div>
    );
  }

  handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
  }

  handleOnClick() {
    this.props.dispatch(createSignUpRequestAction(this.state.name, this.state.email, this.state.password));
    this.initComponentState();
  }

  private initComponentState() {
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
}
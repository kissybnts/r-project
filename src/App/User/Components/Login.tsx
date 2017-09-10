import * as React from 'react';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { createLoginRequestAction } from '../ActionCreators';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

interface CompontentState {
  email: string;
  password: string;
}

export class Login extends React.Component<Props, CompontentState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
  }

  handleOnClick() {
    this.props.dispatch(createLoginRequestAction(this.state.email, this.state.password));
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="">
          <label htmlFor="email">Email: <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="email"/></label>
          <label htmlFor="password">Password: <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleOnChange}/></label>
          <input type="button" value="Login" onClick={this.handleOnClick}/>
        </form>
      </div>
    );
  }
}
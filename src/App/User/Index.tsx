import * as React from 'react';
import { UserState } from './Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../Redux/ConfigureStores';
import { SignUp } from './Components/SignUp';
import { Login } from './Components/Login';

interface Props {
  state: UserState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    if (this.props.state.isLoggedIn) {
      return (
        <div>
          <h2>Welcome</h2>
        </div>
      );
    } else {
      return (
        <div>
          <SignUp dispatch={this.props.dispatch}/>
          <Login dispatch={this.props.dispatch}/>
        </div>
      );
    }
  }
}
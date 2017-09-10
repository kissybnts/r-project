import * as React from 'react';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

export class SignUp extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form>
          <label>Name: <input placeholder="User name"/></label>
          <label>Email: <input type="email"/></label>
          <label>Password: <input type="password"/></label>
          <input type="button" value="SignUp"/>
        </form>
      </div>
    );
  }
}
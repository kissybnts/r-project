import * as React from 'react';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';

interface Props {
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="">
          <label htmlFor="email">Email: <input type="email" id="email" name="email" placeholder="email"/></label>
          <label htmlFor="password">Password: <input type="password" id="password" name="password"/></label>
          <input type="button" value="Login"/>
        </form>
      </div>
    );
  }
}
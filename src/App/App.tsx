import * as React from 'react';
import { ReduxAction, ReduxState } from '../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import Sentence from './Language/Sentences/Container';
import Auth from './Auth/Container';

interface Props {
  state: ReduxState;
  dispatch: Dispatch<ReduxAction>;
}

export class App extends React.Component<Props, {}> {
  render() {
    if (this.props.state.user.isLoggedIn) {
      return (
        <Sentence/>
      );
    } else {
      return (
        <Auth/>
      );
    }
  }
}
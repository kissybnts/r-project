import * as React from 'react';
import { history, ReduxAction, ReduxState } from '../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import Sentence from './Language/Sentences/Container';
import Auth from './Auth/Container';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

interface Props {
  state: ReduxState;
  dispatch: Dispatch<ReduxAction>;
}

export class App extends React.Component<Props, {}> {
  render() {
    if (this.props.state.user.isLoggedIn) {
      return (
        <ConnectedRouter history={history}>
          <Route path="/" component={Sentence}/>
        </ConnectedRouter>
      );
    } else {
      return (
        <Auth/>
      );
    }
  }
}
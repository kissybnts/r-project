import * as React from 'react';
import { history, ReduxAction, ReduxState } from '../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import Category from './Language/Categories/Container';
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
          <div>
            <Route path="/" component={Category}/>
            <Route path="/categories"/>
            <Route path="/categories/:id/sentence" component={Sentence}/>
          </div>
        </ConnectedRouter>
      );
    } else {
      return (
        <Auth/>
      );
    }
  }
}
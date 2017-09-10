import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { App } from './App';

export default connect(
  (state: ReduxState) => ({ state: state }),
  (dispatch: Dispatch<ReduxAction>) => ({ dispatch: dispatch})
)(App);
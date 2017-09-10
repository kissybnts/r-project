import { connect } from 'react-redux';
import { Index } from './Index';
import { ReduxAction, ReduxState } from '../../Redux/ConfigureStores';
import { Dispatch } from 'redux';

export default connect(
  (state: ReduxState) => ({ state: state.user }),
  (dispatch: Dispatch<ReduxAction>) => ({ dispatch: dispatch })
)(Index);
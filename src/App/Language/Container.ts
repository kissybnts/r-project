import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { Index } from './Index';

export default connect(
  (state: ReduxState) => ({ state: state.language }),
  (dispatch: Dispatch<ReduxAction>) => ({ dispatch: dispatch })
)(Index);
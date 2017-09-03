import { ReduxAction, ReduxState } from '../../Redux/ConfigureStores';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Category } from './Components/Category';

export default connect(
  (state: ReduxState) => ({ value: state.category }),
  (dispatch: Dispatch<ReduxAction>) => ({ dispatch: dispatch })
)(Category);
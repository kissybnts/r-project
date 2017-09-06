import { connect } from 'react-redux';
import { Index } from './Components/Index';
import { ReduxAction, ReduxState } from '../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';

export default connect(
  (state: ReduxState) => ({ state: state.language.categories }),
  (dispatch: Dispatch<ReduxAction>) => ({ dispatch: dispatch })
)(Index);
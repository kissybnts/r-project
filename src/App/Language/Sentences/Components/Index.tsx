import * as React from 'react';
import { SentencesState } from '../Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { CategoryDetail } from './CategoryDetail';

interface Props {
  state: SentencesState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    return (
      <CategoryDetail value={this.props.state.category} dispatch={this.props.dispatch}/>
    );
  }
}
import * as React from 'react';
import { SentencesState } from './Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { CategoryDetail } from './Components/CategoryDetail';
import { createCategoryFetchRequestAction } from './ActionCreators';

interface Props {
  state: SentencesState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props.dispatch(createCategoryFetchRequestAction(this.props.state.category.id));
  }

  render() {
    return (
      <CategoryDetail state={this.props.state.category} dispatch={this.props.dispatch}/>
    );
  }
}
import * as React from 'react';
import { CategoriesState } from './Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../Redux/ConfigureStores';
import { CategoryList } from './Components/CategoryList';
import { createCategoriesFetchAction } from './ActionCreators';

interface Props {
  state: CategoriesState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.props.dispatch(createCategoriesFetchAction());
  }
  
  render() {
    return (
      <CategoryList state={this.props.state} />
    );
  }
}
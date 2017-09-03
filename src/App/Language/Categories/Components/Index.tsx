import * as React from 'react';
import { CategoriesState } from '../Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { CategoryList } from './CategoryList';

interface Props {
  state: CategoriesState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    return (
      <CategoryList state={this.props.state} />
    );
  }
}
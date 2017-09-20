import * as React from 'react';
import { CategoriesState } from '../Modules';
import { Category } from './Category';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';

interface Props {
  state: CategoriesState;
  dispatch: Dispatch<ReduxAction>;}

export class CategoryList extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>Category List</h2>
        {this.props.state.categories.map((category) => (
          <Category key={category.id} state={category} dispatch={this.props.dispatch} />
        ))}
      </div>
    );
  }
}
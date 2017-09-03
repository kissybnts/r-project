import * as React from 'react';
import { CategoriesState } from '../Modules';
import { Category } from './Category';

interface Props {
  state: CategoriesState;
}

export class CategoryList extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h2>Category List</h2>
        {this.props.state.categories.map((category) => (
          <Category key={category.id} state={category} />
        ))}
      </div>
    );
  }
}
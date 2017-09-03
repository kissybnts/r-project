import * as React from 'react';
import { CategoryState } from '../Modules';

interface Props {
  state: CategoryState;
}

export class Category extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h3>{this.props.state.name}</h3>
      </div>
    );
  }
}
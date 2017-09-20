import * as React from 'react';
import { CategoryState } from '../Modules';
import { ReduxAction } from '../../../../Redux/ConfigureStores';
import { Dispatch } from 'redux';
import { push } from 'react-router-redux';

interface Props {
  state: CategoryState;
  dispatch: Dispatch<ReduxAction>;
}

export class Category extends React.Component<Props, {}> {
  render() {
    return (
      <div onClick={this.handleOnClick}>
        <h3>{this.props.state.name}</h3>
      </div>
    );
  }

  private handleOnClick() {
    this.props.dispatch(push(`/categories/${this.props.state.id}/sentences`));
  }
}
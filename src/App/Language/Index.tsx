import * as React from 'react';
import { LanguageState } from './Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../Redux/ConfigureStores';
import { Index as Sentences } from './Sentences/Components/Index';

interface Props {
  state: LanguageState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    return (
        <Sentences state={this.props.state.sentences} dispatch={this.props.dispatch}/>
    );
  }
}
import * as React from 'react';
import { LanguageState } from './Modules';
import { Dispatch } from 'redux';
import { ReduxAction } from '../../Redux/ConfigureStores';
import Sentences from './Sentences/Container';

interface Props {
  state: LanguageState;
  dispatch: Dispatch<ReduxAction>;
}

export class Index extends React.Component<Props, {}> {
  render() {
    return (
        <Sentences />
    );
  }
}
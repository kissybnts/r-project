import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStores';
import Category from './App/Language/Container';

ReactDOM.render(
  <Provider store={store}>
    <Category />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

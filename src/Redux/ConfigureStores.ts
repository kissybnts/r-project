import { Action, combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer, { UserState } from '../App/Auth/Modules';
import categoriesReducer from '../App/Language/Categories/Modules';
import sentencesReducer from '../App/Language/Sentences/Modules';
import { LanguageState } from '../App/Language/Modules';
import { LanguageActions } from '../App/Language/Modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Redux/Saga/Root';
import { UserActions } from '../App/Auth/Actions';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();
const routerMW = routerMiddleware(history);

export default createStore(
  combineReducers({
    user: userReducer,
    language: combineReducers({
      categories: categoriesReducer,
      sentences: sentencesReducer
    }),
    router: routerReducer
  }),
  applyMiddleware(sagaMiddleware, routerMW)
);

sagaMiddleware.run(rootSaga);

export type ReduxState = {
  user: UserState,
  language: LanguageState
};

export type ReduxAction = UserActions | LanguageActions | Action;
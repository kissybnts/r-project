import { Action, combineReducers, createStore, applyMiddleware } from 'redux';
import categoriesReducer from '../App/Language/Categories/Modules';
import sentencesReducer from '../App/Language/Sentences/Modules';
import { LanguageState } from '../App/Language/Modules';
import { LanguageActions } from '../App/Language/Modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Redux/Saga/Root';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    language: combineReducers({
      categories: categoriesReducer,
      sentences: sentencesReducer
    })
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type ReduxState = {
  language: LanguageState
};

export type ReduxAction = LanguageActions | Action;
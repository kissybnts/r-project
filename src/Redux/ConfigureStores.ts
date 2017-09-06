import { Action, combineReducers, createStore } from 'redux';
import categoriesReducer from '../App/Language/Categories/Modules';
import sentencesReducer from '../App/Language/Sentences/Modules';
import { LanguageState } from '../App/Language/Modules';
import { LanguageActions } from '../App/Language/Modules';

export default createStore(
  combineReducers({
    language: combineReducers({
      categories: categoriesReducer,
      sentences: sentencesReducer
    })
  })
);

export type ReduxState = {
  language: LanguageState
};

export type ReduxAction = LanguageActions | Action;
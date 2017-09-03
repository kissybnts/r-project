import { Action, combineReducers, createStore } from 'redux';
import { LanguageActions } from '../App/Language/Actions';
import languageReducer, { CategoryState } from '../App/Language/Modules';

export default createStore(
  combineReducers({
    language: languageReducer
  })
);

export type ReduxState = {
  category: CategoryState
};

export type ReduxAction = LanguageActions | Action;
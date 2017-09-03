import { Action, combineReducers, createStore } from 'redux';
import sentencesReducer, { SentencesState } from '../App/Language/Sentences/Modules';
import categoriesReducer, { CategoriesState } from '../App/Language/Categories/Modules';
import { SentencesActions } from '../App/Language/Sentences/Actions';

export default createStore(
  combineReducers({
    sentences: sentencesReducer,
    categories: categoriesReducer
  })
);

export type ReduxState = {
  sentences: SentencesState,
  categories: CategoriesState
};

export type ReduxAction = SentencesActions | Action;
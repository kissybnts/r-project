import { Action } from 'redux';
import { EntityState, UserRelationEntityState } from '../../Constant/CommonState';
import {
  isCategoryFetchSuccess,
  isCategoryUpdate, isSentenceCreateSuccess, isSentenceDelete,
  isSentenceUpdate
} from './Actions';

// States
export interface SentenceState extends EntityState {
  original: string;
  translation: string;
}

export interface AddSentenceState {
  userId: number;
  categoryId: number;
}

export interface CategoryDetailState extends UserRelationEntityState {
  name: string;
  sentences: SentenceState[];
}

export interface SentencesState {
  category: CategoryDetailState;
}

export const initialSentencesState: SentencesState = {
  category: {
    id: 1,
    userId: 1,
    name: '　',
    sentences: []
  }
};

// Reducer
export default function reducer(state: SentencesState = initialSentencesState, action: Action): SentencesState {
  if (isCategoryFetchSuccess(action)) {
    return { category: { id: action.category.id, userId: state.category.userId, name: action.category.name, sentences: action.sentences }};
  } else if (isCategoryUpdate(action)) {
    return { category: { ...state.category, name: action.name, sentences: state.category.sentences }};
  } else if (isSentenceUpdate(action)) {
    let index = state.category.sentences.map((s) => { return s.id; }).indexOf(action.sentenceId);
    let target = state.category.sentences[index];
    let sentence: SentenceState = { ...target, original: action.original, translation: action.translation };
    let sentences = state.category.sentences.slice(0, index);
    sentences.push(sentence, ...state.category.sentences.slice(index + 1, state.category.sentences.length));
    return { category: { ...state.category, sentences: sentences }};
  } else if (isSentenceDelete(action)) {
    let index = state.category.sentences.map((s) => { return s.id; }).indexOf(action.sentenceId);
    let sentences = state.category.sentences.slice(0, index).concat(state.category.sentences.slice(index + 1, state.category.sentences.length));
    return { category: { ...state.category, sentences: sentences }};
  } else if (isSentenceCreateSuccess(action)) {
    let sentence: SentenceState = { id: action.sentenceId, original: action.original, translation: action.translation };
    let sentences = state.category.sentences.concat(sentence);
    return { category: { ...state.category, sentences: sentences }};
  }
  return state;
}
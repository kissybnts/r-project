import { Action } from 'redux';
import { UserRelationEntityState } from '../../Constant/CommonState';
import { isCategoryUpdate, isSentenceCreate, isSentenceDelete, isSentenceUpdate } from './Actions';

// State
export interface SentenceState extends UserRelationEntityState {
  original: string;
  translation: string;
}

export interface CategoryState extends UserRelationEntityState {
  name: string;
}

export interface CategoryDetailState extends CategoryState {
  sentences: SentenceState[];
}

export interface SentencesState {
  category: CategoryDetailState;
}

export const initialSentencesState: SentencesState = {
  category: {
    id: -1,
    userId: -1,
    name: 'initial name',
    sentences: []
  }
};

// Reducer
export default function reducer(state: SentencesState = initialSentencesState, action: Action): SentencesState {
  if (isCategoryUpdate(action)) {
    return { category: { ...state.category, name: action.name, sentences: state.category.sentences }};
  } else if (isSentenceCreate(action)) {
    let sentenceId = state.category.sentences.length + 1;
    let sentence: SentenceState = { id: sentenceId, userId: state.category.userId, original: action.original, translation: action.translation };
    let sentences = state.category.sentences.concat(sentence);
    return { category: { ...state.category, sentences: sentences }};
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
  } else {
    return state;
  }
}
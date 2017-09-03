import { Action } from 'redux';
import { UserRelationEntityState } from '../Constant/CommonState';
import { isCategoryUpdate, isSentenceCreate, isSentenceDelete, isSentenceUpdate } from './Actions';

// State
export interface SentenceState extends UserRelationEntityState {
  original: string;
  translation: string;
}

export interface CategoryState extends UserRelationEntityState {
  name: string;
  sentences: SentenceState[];
}
const initialState: CategoryState = {
  id: -1,
  userId: -1,
  name: 'initial name',
  sentences: [
    { id: -1, userId: -1, original: 'Original Sentence', translation: '原文' }
  ]
};

// Reducer
export default function reducer(state: CategoryState = initialState, action: Action): CategoryState {
  if (isCategoryUpdate(action)) {
    return { ...state, name: action.name, sentences: state.sentences };
  } else if (isSentenceCreate(action)) {
    let sentenceId = state.sentences.length + 1;
    let sentence: SentenceState = { id: sentenceId, userId: state.userId, original: action.original, translation: action.translation };
    let sentences = state.sentences.concat(sentence);
    return { ...state, sentences: sentences };
  } else if (isSentenceUpdate(action)) {
    let index = state.sentences.map((s) => { return s.id; }).indexOf(action.sentenceId);
    let target = state.sentences[index];
    let sentence: SentenceState = { ...target, original: action.original, translation: action.translation };
    let sentences = state.sentences.slice(0, index);
    sentences.push(sentence, ...state.sentences.slice(index + 1, state.sentences.length));
    return { ...state, sentences: sentences };
  } else if (isSentenceDelete(action)) {
    let index = state.sentences.map((s) => { return s.id; }).indexOf(action.sentenceId);
    let sentences = state.sentences.slice(0, index).concat(state.sentences.slice(index + 1, state.sentences.length));
    return { ...state, sentences: sentences };
  } else {
    return state;
  }
}
import { Action } from 'redux';

export enum ActionType {
  CATEGORY_UPDATE = 'category/update',
  SENTENCE_CREATE = 'sentence/create',
  SENTENCE_UPDATE = 'sentence/update',
  SENTENCE_DELETE = 'sentence/delete',
  SENTENCE_CREATE_SUCCESS = 'sentence/create/success',
  SENTENCE_CREATE_FAILURE = 'sentence/create/failure'
}

interface SentencesAction extends Action {
  type: ActionType;
}
export interface CategoryUpdateAction extends SentencesAction {
  name: string;
}
export const isCategoryUpdate = (action: Action): action is CategoryUpdateAction => action.type === ActionType.CATEGORY_UPDATE;

export interface SentenceCreateAction extends SentencesAction {
  userId: number;
  categoryId: number;
  original: string;
  translation: string;
}
export const isSentenceCreate = (action: Action): action is SentenceCreateAction => action.type === ActionType.SENTENCE_CREATE;

export interface SentenceUpdateAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceUpdate = (action: Action): action is SentenceUpdateAction => action.type === ActionType.SENTENCE_UPDATE;

export interface SentenceDeleteAction extends SentencesAction {
  sentenceId: number;
}
export const isSentenceDelete = (action: Action): action is SentenceDeleteAction => action.type === ActionType.SENTENCE_DELETE;

export interface SentenceCreateSuccessAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceCreateSuccess = (action: Action): action is SentenceCreateSuccessAction => action.type === ActionType.SENTENCE_CREATE_SUCCESS;

export type SentencesActions = CategoryUpdateAction | SentenceCreateAction |
  SentenceUpdateAction | SentenceDeleteAction | SentenceCreateSuccessAction;
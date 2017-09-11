import { Action } from 'redux';

export enum ActionType {
  CATEGORY_FETCH = 'category/fetch',
  CATEGORY_FETCH_SUCCESS = 'category/fetch/success',
  CATEGORY_FETCH_FAILURE = 'category/fetch/failure',
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

export interface CategoryFetchAction extends SentencesAction {
  id: number;
}
export const isCategoryFetchAction = (action: Action): action is CategoryFetchAction => action.type === ActionType.CATEGORY_FETCH;

export interface CategoryFetchSuccessAction extends SentencesAction {
  category: { id: number, name: string };
  sentences: { id: number, original: string, translation: string }[];
}
export const isCategoryFetchSuccessAction = (action: Action): action is CategoryFetchSuccessAction => action.type === ActionType.CATEGORY_FETCH_SUCCESS;

export interface CategoryUpdateAction extends SentencesAction {
  name: string;
}
export const isCategoryUpdateAction = (action: Action): action is CategoryUpdateAction => action.type === ActionType.CATEGORY_UPDATE;

export interface SentenceCreateAction extends SentencesAction {
  categoryId: number;
  original: string;
  translation: string;
}
export const isSentenceCreateAction = (action: Action): action is SentenceCreateAction => action.type === ActionType.SENTENCE_CREATE;

export interface SentenceUpdateAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceUpdateAction = (action: Action): action is SentenceUpdateAction => action.type === ActionType.SENTENCE_UPDATE;

export interface SentenceDeleteAction extends SentencesAction {
  sentenceId: number;
}
export const isSentenceDeleteAction = (action: Action): action is SentenceDeleteAction => action.type === ActionType.SENTENCE_DELETE;

export interface SentenceCreateSuccessAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceCreateSuccessAction = (action: Action): action is SentenceCreateSuccessAction => action.type === ActionType.SENTENCE_CREATE_SUCCESS;

export type SentencesActions = CategoryFetchAction | CategoryUpdateAction | SentenceCreateAction |
  SentenceUpdateAction | SentenceDeleteAction | SentenceCreateSuccessAction;
import { Action } from 'redux';

export enum ActionType {
  CategoryFetchRequest = 'category/fetch',
  CategoryFetchRequestSuccess = 'category/fetch/success',
  CategoryFetchRequestFailure = 'category/fetch/failure',
  CategoryUpdateRequest = 'category/update',
  SentenceCreateRequest = 'sentence/create',
  SentenceCreateRequestSuccess = 'sentence/create/success',
  SentenceCreateRequestFailure = 'sentence/create/failure',
  SentenceUpdateRequest = 'sentence/update',
  SentenceDeleteRequest = 'sentence/delete'
}

interface SentencesAction extends Action {
  type: ActionType;
}

export interface CategoryFetchRequestAction extends SentencesAction {
  id: number;
}
export const isCategoryFetchRequestAction = (action: Action): action is CategoryFetchRequestAction => action.type === ActionType.CategoryFetchRequest;

export interface CategoryFetchRequestSuccessAction extends SentencesAction {
  category: { id: number, name: string };
  sentences: { id: number, original: string, translation: string }[];
}
export const isCategoryFetchRequestSuccessAction = (action: Action): action is CategoryFetchRequestSuccessAction => action.type === ActionType.CategoryFetchRequestSuccess;

export interface CategoryUpdateRequestAction extends SentencesAction {
  name: string;
}
export const isCategoryUpdateRequestAction = (action: Action): action is CategoryUpdateRequestAction => action.type === ActionType.CategoryUpdateRequest;

export interface SentenceCreateRequestAction extends SentencesAction {
  categoryId: number;
  original: string;
  translation: string;
}
export const isSentenceCreateRequestAction = (action: Action): action is SentenceCreateRequestAction => action.type === ActionType.SentenceCreateRequest;

export interface SentenceUpdateRequestAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceUpdateRequestAction = (action: Action): action is SentenceUpdateRequestAction => action.type === ActionType.SentenceUpdateRequest;

export interface SentenceDeleteRequestAction extends SentencesAction {
  sentenceId: number;
}
export const isSentenceDeleteRequestAction = (action: Action): action is SentenceDeleteRequestAction => action.type === ActionType.SentenceDeleteRequest;

export interface SentenceCreateRequestSuccessAction extends SentencesAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceCreateRequestSuccessAction = (action: Action): action is SentenceCreateRequestSuccessAction => action.type === ActionType.SentenceCreateRequestSuccess;

export type SentencesActions = CategoryFetchRequestAction | CategoryUpdateRequestAction | SentenceCreateRequestAction |
  SentenceUpdateRequestAction | SentenceDeleteRequestAction | SentenceCreateRequestSuccessAction;
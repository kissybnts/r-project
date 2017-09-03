import { Action } from 'redux';

export enum ActionType {
  CATEGORY_UPDATE = 'category/update',
  SENTENCE_CREATE = 'sentence/create',
  SENTENCE_UPDATE = 'sentence/update',
  SENTENCE_DELETE = 'sentence/delete'
}

interface LanguageAction extends Action {
  type: ActionType;
}

export interface CategoryUpdateAction extends LanguageAction {
  name: string;
}
export const isCategoryUpdate = (action: Action): action is CategoryUpdateAction => action.type === ActionType.CATEGORY_UPDATE;

export interface SentenceCreateAction extends LanguageAction {
  original: string;
  translation: string;
}
export const isSentenceCreate = (action: Action): action is SentenceCreateAction => action.type === ActionType.SENTENCE_CREATE;

export interface SentenceUpdateAction extends LanguageAction {
  sentenceId: number;
  original: string;
  translation: string;
}
export const isSentenceUpdate = (action: Action): action is SentenceUpdateAction => action.type === ActionType.SENTENCE_UPDATE;

export interface SentenceDeleteAction extends LanguageAction {
  sentenceId: number;
}
export const isSentenceDelete = (action: Action): action is SentenceDeleteAction => action.type === ActionType.SENTENCE_DELETE;

export type LanguageActions = CategoryUpdateAction | SentenceCreateAction | SentenceUpdateAction | SentenceDeleteAction;
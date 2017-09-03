import {
  ActionType, CategoryUpdateAction, SentenceCreateAction, SentenceDeleteAction,
  SentenceUpdateAction
} from './Actions';

export const getCategoryUpdateAction = (name: string): CategoryUpdateAction => ({ type: ActionType.CATEGORY_UPDATE, name: name });

export const getSentenceCreateAction = (original: string, translation: string): SentenceCreateAction =>
  ({ type: ActionType.SENTENCE_CREATE, original: original, translation: translation });

export const getSentenceUpdateAction = (sentenceId: number, original: string, translation: string): SentenceUpdateAction =>
  ({ type: ActionType.SENTENCE_UPDATE, sentenceId: sentenceId, original: original, translation: translation });

export const getSentenceDeleteAction = (sentenceId: number): SentenceDeleteAction => ({ type: ActionType.SENTENCE_DELETE, sentenceId: sentenceId });
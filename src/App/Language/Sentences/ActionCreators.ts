import {
  ActionType, CategoryUpdateAction, SentenceCreateAction, SentenceCreateSuccessAction, SentenceDeleteAction,
  SentenceUpdateAction
} from './Actions';
import { SentenceResponse } from '../../../API/SentencesAPI';

export const getCategoryUpdateAction = (name: string): CategoryUpdateAction => ({ type: ActionType.CATEGORY_UPDATE, name: name });

export const getSentenceCreateAction = (userId: number, categoryId: number, original: string, translation: string): SentenceCreateAction =>
  ({ type: ActionType.SENTENCE_CREATE, userId: userId, categoryId: categoryId,  original: original, translation: translation });

export const getSentenceUpdateAction = (sentenceId: number, original: string, translation: string): SentenceUpdateAction =>
  ({ type: ActionType.SENTENCE_UPDATE, sentenceId: sentenceId, original: original, translation: translation });

export const getSentenceDeleteAction = (sentenceId: number): SentenceDeleteAction => ({ type: ActionType.SENTENCE_DELETE, sentenceId: sentenceId });

export const getSentenceCreateSuccessAction = (sentence: SentenceResponse): SentenceCreateSuccessAction => 
  ({ type: ActionType.SENTENCE_CREATE_SUCCESS, sentenceId: sentence.id, original: sentence.original, translation: sentence.translation});
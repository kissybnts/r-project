import {
  ActionType, CategoryFetchAction, CategoryFetchSuccessAction, CategoryUpdateAction, SentenceCreateAction,
  SentenceCreateSuccessAction,
  SentenceDeleteAction,
  SentenceUpdateAction
} from './Actions';
import { SentenceResponse } from '../../../API/Sentences/Responses';
import { CategoryResponse } from '../../../API/Categories/Responses';

export const createCategoryFetchAction = (categoryId: number): CategoryFetchAction => ({ type: ActionType.CATEGORY_FETCH, id: categoryId });

export const createCategoryFetchSuccessAction = (category: CategoryResponse): CategoryFetchSuccessAction => {
  return { type: ActionType.CATEGORY_FETCH_SUCCESS, category: { id: category.id, name: category.name }, sentences: category.sentences };
};

export const createCategoryUpdateAction = (name: string): CategoryUpdateAction => ({ type: ActionType.CATEGORY_UPDATE, name: name });

export const createSentenceCreateAction = (categoryId: number, original: string, translation: string): SentenceCreateAction =>
  ({ type: ActionType.SENTENCE_CREATE, categoryId: categoryId,  original: original, translation: translation });

export const createSentenceUpdateAction = (sentenceId: number, original: string, translation: string): SentenceUpdateAction =>
  ({ type: ActionType.SENTENCE_UPDATE, sentenceId: sentenceId, original: original, translation: translation });

export const createSentenceDeleteAction = (sentenceId: number): SentenceDeleteAction => ({ type: ActionType.SENTENCE_DELETE, sentenceId: sentenceId });

export const createSentenceCreateSuccessAction = (sentence: SentenceResponse): SentenceCreateSuccessAction =>
  ({ type: ActionType.SENTENCE_CREATE_SUCCESS, sentenceId: sentence.id, original: sentence.original, translation: sentence.translation});
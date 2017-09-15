import {
  ActionType, CategoryFetchRequestAction, CategoryFetchRequestSuccessAction, CategoryUpdateRequestAction, SentenceCreateRequestAction,
  SentenceCreateRequestSuccessAction,
  SentenceDeleteRequestAction,
  SentenceUpdateRequestAction
} from './Actions';
import { SentenceResponse } from '../../../API/Sentences/Responses';
import { CategoryDetailResponse } from '../../../API/Categories/Responses';

export const createCategoryFetchRequestAction = (categoryId: number): CategoryFetchRequestAction => ({ type: ActionType.CategoryFetchRequest, id: categoryId });

export const createCategoryFetchRequestSuccessAction = (category: CategoryDetailResponse): CategoryFetchRequestSuccessAction => {
  return { type: ActionType.CategoryFetchRequestSuccess, category: { id: category.id, name: category.name }, sentences: category.sentences };
};

export const createCategoryUpdateRequestAction = (name: string): CategoryUpdateRequestAction => ({ type: ActionType.CategoryUpdateRequest, name: name });

export const createSentenceCreateRequestAction = (categoryId: number, original: string, translation: string): SentenceCreateRequestAction =>
  ({ type: ActionType.SentenceCreateRequest, categoryId: categoryId,  original: original, translation: translation });

export const createSentenceCreateRequestSuccessAction = (sentence: SentenceResponse): SentenceCreateRequestSuccessAction =>
  ({ type: ActionType.SentenceCreateRequestSuccess, sentenceId: sentence.id, original: sentence.original, translation: sentence.translation});

export const createSentenceUpdateRequestAction = (sentenceId: number, original: string, translation: string): SentenceUpdateRequestAction =>
  ({ type: ActionType.SentenceUpdateRequest, sentenceId: sentenceId, original: original, translation: translation });

export const createSentenceDeleteRequestAction = (sentenceId: number): SentenceDeleteRequestAction => ({ type: ActionType.SentenceDeleteRequest, sentenceId: sentenceId });
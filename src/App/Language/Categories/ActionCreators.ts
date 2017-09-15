import {
  ActionType, CategoriesFetchAction, CategoriesFetchFailureAction,
  CategoriesFetchSuccessAction, CategoryCreateAction, CategoryCreateFailureAction, CategoryCreateSuccessAction
} from './Actions';
import { CategoriesResponse, CategoryResponse } from '../../../API/Categories/Responses';

export const createCategoriesFetchAction = (): CategoriesFetchAction =>
  ({ type: ActionType.CategoriesFetch });

export const createCategoriesFetchSuccessAction = (categoriesResponse: CategoriesResponse): CategoriesFetchSuccessAction =>
  ({ type: ActionType.CategoriesFetchSuccess, categories: categoriesResponse.categories });

export const createCategoriesFetchFailureAction = (): CategoriesFetchFailureAction => 
  ({ type: ActionType.CategoriesFetchFailure });

export const createCategoryCreateAction = (name: string): CategoryCreateAction =>
  ({ type: ActionType.CategoryCreate, name: name });

export const createCategoryCreateSuccessAction = (response: CategoryResponse): CategoryCreateSuccessAction =>
  ({ type: ActionType.CategoryCreateSuccess, id: response.id, name: response.name });

export const createCategoryCreateFailureAction = (): CategoryCreateFailureAction =>
  ({ type: ActionType.CategoryCreateFailure });
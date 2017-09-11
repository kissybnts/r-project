import {
  ActionType, CategoriesFetchAction, CategoriesFetchFailureAction,
  CategoriesFetchSuccessAction
} from './Actions';
import { CategoriesResponse } from '../../../API/Categories/Responses';

export const createCategoriesFetchAction = (): CategoriesFetchAction =>
  ({ type: ActionType.CategoriesFetch });

export const createCategoriesFetchSuccessAction = (categoriesResponse: CategoriesResponse): CategoriesFetchSuccessAction =>
  ({ type: ActionType.CategoriesFetchSuccess, categories: categoriesResponse.categories });

export const createCategoriesFetchFailureAction = (): CategoriesFetchFailureAction => 
  ({ type: ActionType.CategoriesFetchFailure });
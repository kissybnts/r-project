import { Action } from 'redux';

export enum ActionType {
  CategoriesFetch = 'categories/fetch',
  CategoriesFetchSuccess = 'categories/fetch/success',
  CategoriesFetchFailure = 'categories/fetch/failure'
}

interface CategoriesAction extends Action {
  type: ActionType;
}

export interface CategoriesFetchAction extends CategoriesAction { }
export const isCategoriesFetchAction = (action: Action): action is CategoriesFetchAction => action.type === ActionType.CategoriesFetch;

export interface CategoriesFetchSuccessAction extends CategoriesAction {
  categories: { id: number, name: string }[];
}
export const isCategoriesFetchSuccessAction = (action: Action): action is CategoriesFetchSuccessAction => action.type === ActionType.CategoriesFetchSuccess;

export interface CategoriesFetchFailureAction extends CategoriesAction { }
export const isCategoriesFetchFailureAction = (action: Action): action is CategoriesFetchFailureAction => action.type === ActionType.CategoriesFetchFailure;

// Summary of actions in this module
export type CategoriesActions = CategoriesFetchAction | CategoriesFetchSuccessAction | CategoriesFetchFailureAction;
import { Action } from 'redux';
import { EntityState } from '../../Common/CommonState';
import { isCategoriesFetchSuccessAction } from './Actions';

// State
export interface CategoryState extends EntityState {
  name: string;
}

export interface CategoriesState {
  categories: CategoryState[];
}

export const initialCategoriesState: CategoriesState = {
  categories: []
};

// Reducer
export default function reducer(state: CategoriesState = initialCategoriesState, action: Action): CategoriesState {
  if (isCategoriesFetchSuccessAction(action)) {
    return { categories: action.categories };
  }
  return state;
}
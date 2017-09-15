import { Action } from 'redux';
import { EntityState } from '../../Common/CommonState';
import { isCategoriesFetchSuccessAction, isCategoryCreateSuccessAction } from './Actions';

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
  } else if (isCategoryCreateSuccessAction(action)) {
    let categories = state.categories.concat({ id: action.id, name: action.name });
    return { categories: categories };
  }
  return state;
}
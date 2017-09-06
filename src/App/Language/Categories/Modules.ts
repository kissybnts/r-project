import { Action } from 'redux';
import { UserRelationEntityState } from '../../Constant/CommonState';

// State
export interface CategoryState extends UserRelationEntityState {
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
  return state;
}
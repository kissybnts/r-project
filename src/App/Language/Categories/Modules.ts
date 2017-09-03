import { Action } from 'redux';
import { UserRelationEntityState } from '../../Constant/CommonState';

// State
export interface CategoryState extends UserRelationEntityState {
  name: string;
}

export interface CategoriesState {
  categories: CategoryState[];
}
const initialState: CategoriesState = {
  categories: []
};

// Reducer
export default function reducer(state: CategoriesState = initialState, action: Action): CategoriesState {
  return state;
}
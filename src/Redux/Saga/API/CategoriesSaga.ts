import { CategoryFetchAction, isCategoryFetch } from '../../../App/Language/Sentences/Actions';
import { call, put, take } from 'redux-saga/effects';
import { APIResponses } from '../../../API/Common';
import { CategoriesAPI } from '../../../API/Categories/API';
import { createCategoryFetchSuccessAction } from '../../../App/Language/Sentences/ActionCreators';
import { CategoriesResponse, CategoryResponse } from '../../../API/Categories/Responses';
import { isCategoriesFetchAction } from '../../../App/Language/Categories/Actions';
import { createCategoriesFetchSuccessAction } from '../../../App/Language/Categories/ActionCreators';

export function* handleFetchCategories() {
  while (true) {
    yield take(isCategoriesFetchAction);
    const apiResponses: APIResponses = yield call(CategoriesAPI.fetchCategories);
    if (!apiResponses.error) {
      let response: CategoriesResponse = { categories: apiResponses.response.data};
      yield put(createCategoriesFetchSuccessAction(response));
    } else {
      console.log(apiResponses.error);
    }
  }
}

export function* handleFetchCategory() {
  while (true) {
    const action: CategoryFetchAction = yield take(isCategoryFetch);
    const apiResponses: APIResponses = yield call(CategoriesAPI.fetchCategory, action.id);
    if (!apiResponses.error) {
      yield put(createCategoryFetchSuccessAction(<CategoryResponse> apiResponses.response.data));
    } else {
      console.log(apiResponses.error);
    }
  }
}


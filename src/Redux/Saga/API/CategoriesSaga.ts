import { CategoryFetchAction, isCategoryFetchAction } from '../../../App/Language/Sentences/Actions';
import { call, put, take } from 'redux-saga/effects';
import { APIResponses } from '../../../API/Common';
import { CategoriesAPI } from '../../../API/Categories/API';
import { createCategoryFetchSuccessAction } from '../../../App/Language/Sentences/ActionCreators';
import { CategoriesResponse, CategoryDetailResponse, CategoryResponse } from '../../../API/Categories/Responses';
import { CategoryCreateAction, isCategoriesFetchAction, isCategoryCreateAction } from '../../../App/Language/Categories/Actions';
import { createCategoriesFetchSuccessAction, createCategoryCreateSuccessAction } from '../../../App/Language/Categories/ActionCreators';
import { ConstantKey } from '../../../Constant/ConstantWord';
import { CreateCategoryRequest } from '../../../API/Categories/Requests';

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
    const action: CategoryFetchAction = yield take(isCategoryFetchAction);
    const apiResponses: APIResponses = yield call(CategoriesAPI.fetchCategory, action.id);
    if (!apiResponses.error) {
      yield put(createCategoryFetchSuccessAction(<CategoryDetailResponse> apiResponses.response.data));
    } else {
      console.log(apiResponses.error);
    }
  }
}

export function* handleCreateCategory() {
  while (true) {
    const action: CategoryCreateAction = yield take(isCategoryCreateAction);
    const userId = Number(sessionStorage.getItem(ConstantKey.USER_ID));
    const createCategoryRequest: CreateCategoryRequest = { name: action.name, user_id: userId };
    const apiResponses: APIResponses = yield call(CategoriesAPI.createCategory, createCategoryRequest);
    if (!apiResponses.error) {
      yield put(createCategoryCreateSuccessAction(<CategoryResponse> apiResponses.response.data));
    } else {
      // TODO need to implement the case of error occurred
      console.log(apiResponses.error);
    }
  }
}
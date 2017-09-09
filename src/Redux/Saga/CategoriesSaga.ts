import { CategoryFetchAction, isCategoryFetch } from '../../App/Language/Sentences/Actions';
import { call, put, take } from 'redux-saga/effects';
import { APIResponses } from '../../API/Common';
import { CategoriesAPI } from '../../API/Categories/API';
import { createCategoryFetchSuccessAction } from '../../App/Language/Sentences/ActionCreators';
import { CategoryResponse } from '../../API/Categories/Responses';

export function* handleFetchCategory() {
  while (true) {
    const action: CategoryFetchAction = yield take(isCategoryFetch);
    console.log('category fetch');
    const apiResponses: APIResponses = yield call(CategoriesAPI.fetchCategory, action.id);
    if (!apiResponses.error) {
      yield put(createCategoryFetchSuccessAction(<CategoryResponse> apiResponses.response.data));
    } else {
      console.log(apiResponses.error);
    }
  }
}
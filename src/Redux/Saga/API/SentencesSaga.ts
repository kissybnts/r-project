import { call, put, take } from 'redux-saga/effects';
import { SentencesAPI } from '../../../API/Sentences/API';
import { isSentenceCreateAction, SentenceCreateAction } from '../../../App/Language/Sentences/Actions';
import { createSentenceCreateSuccessAction } from '../../../App/Language/Sentences/ActionCreators';
import { APIResponses } from '../../../API/Common';
import { SentenceResponse } from '../../../API/Sentences/Responses';
import { ConstantKey } from '../../../Constant/ConstantWord';

export function* handleCreateSentence() {
  while (true) {
    const action: SentenceCreateAction = yield take(isSentenceCreateAction);
    let userId = Number(sessionStorage.getItem(ConstantKey.USER_ID));
    const sentenceRequest = { user_id: userId, category_id: action.categoryId, original: action.original, translation: action.translation };
    const apiResponses: APIResponses = yield call(SentencesAPI.createSentence, sentenceRequest);
    if (!apiResponses.error) {
      yield put(createSentenceCreateSuccessAction(<SentenceResponse> apiResponses.response.data));
    } else {
      // TODO need to implement the case of error occurred
      console.log(apiResponses.error);
    }
  }
}
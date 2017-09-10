import { call, put, take } from 'redux-saga/effects';
import { SentencesAPI } from '../../../API/Sentences/API';
import { isSentenceCreate, SentenceCreateAction } from '../../../App/Language/Sentences/Actions';
import { getSentenceCreateSuccessAction } from '../../../App/Language/Sentences/ActionCreators';
import { APIResponses } from '../../../API/Common';
import { SentenceResponse } from '../../../API/Sentences/Responses';

export function* handleCreateSentence() {
  while (true) {
    const action: SentenceCreateAction = yield take(isSentenceCreate);
    const sentenceRequest = { user_id: action.userId, category_id: action.categoryId, original: action.original, translation: action.translation };
    const apiResponses: APIResponses = yield call(SentencesAPI.createSentence, sentenceRequest);
    if (!apiResponses.error) {
      yield put(getSentenceCreateSuccessAction(<SentenceResponse> apiResponses.response.data));
    } else {
      // TODO need to implement the case of error occurred
      console.log(apiResponses.error);
    }
  }
}
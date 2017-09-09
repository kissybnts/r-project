import { call, put, take } from 'redux-saga/effects';
import { APIResponses, SentenceResponse, sentencesApi } from '../../API/SentencesAPI';
import { isSentenceCreate, SentenceCreateAction } from '../../App/Language/Sentences/Actions';
import { getSentenceCreateSuccessAction } from '../../App/Language/Sentences/ActionCreators';

export function* handleCreateSentence() {
  while (true) {
    const action: SentenceCreateAction = yield take(isSentenceCreate);
    // TODO change to get user id from somewhere
    const sentenceRequest = { user_id: action.userId, category_id: action.categoryId, original: action.original, translation: action.translation };
    const apiResponses: APIResponses = yield call(sentencesApi.createSentence, sentenceRequest);
    if (!apiResponses.error) {
      yield put(getSentenceCreateSuccessAction(<SentenceResponse> apiResponses.response.data));
    } else {
      console.log(apiResponses.error);
    }
  }
}
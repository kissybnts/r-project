import { fork } from 'redux-saga/effects';
import { handleCreateSentence } from './API/SentencesSaga';
import { handleFetchCategories, handleFetchCategory } from './API/CategoriesSaga';
import { handleAuthSaveAction, handleLoginRequestAction, handleSignUpRequestAction } from './API/AuthSaga';

export default function* rootSaga() {
  yield fork(handleCreateSentence);
  yield fork(handleFetchCategory);
  yield fork(handleLoginRequestAction);
  yield fork(handleSignUpRequestAction);
  yield fork(handleAuthSaveAction);
  yield fork(handleFetchCategories);
}
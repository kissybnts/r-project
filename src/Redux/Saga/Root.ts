import { fork } from 'redux-saga/effects';
import { handleCreateSentence } from './API/SentencesSaga';
import { handleFetchCategory } from './API/CategoriesSaga';

export default function* rootSaga() {
  yield fork(handleCreateSentence);
  yield fork(handleFetchCategory);
}
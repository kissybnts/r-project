import { fork } from 'redux-saga/effects';
import { handleCreateSentence } from './SentencesSaga';
import { handleFetchCategory } from './CategoriesSaga';

export default function* rootSaga() {
  yield fork(handleCreateSentence);
  yield fork(handleFetchCategory)
}
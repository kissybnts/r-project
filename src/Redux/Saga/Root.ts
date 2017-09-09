import { fork } from 'redux-saga/effects';
import { handleCreateSentence } from './SentencesSaga';

export default function* rootSaga() {
  yield fork(handleCreateSentence);
}
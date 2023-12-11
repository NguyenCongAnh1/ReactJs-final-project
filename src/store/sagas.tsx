// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_QUESTION, fetchQuestionSuccess, fetchQuestionFailure } from './actions';
import { all } from 'redux-saga/effects';
import axios, { AxiosError, AxiosResponse } from 'axios';

function* fetchQuestionSaga() {
  try {
    // Fetch question logic here
    const question: AxiosResponse = yield call(axios.get, 'http://localhost:3000'); // replace with your API call
    yield put(fetchQuestionSuccess(question.data));
  } catch (error) {
    if(error instanceof AxiosError) {
      yield put(fetchQuestionFailure(error.message));
    }
   
  }
}
export function* watchFetchQuestion() {
  yield takeEvery(FETCH_QUESTION, fetchQuestionSaga);
}
// rootSaga.js
export default function* rootSaga() {
  yield all([
    watchFetchQuestion(),
    // Add other sagas if needed
  ]);
}
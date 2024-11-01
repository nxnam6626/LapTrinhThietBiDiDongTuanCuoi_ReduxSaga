import { all } from 'redux-saga/effects';
import taskSaga from '../slices/taskSaga';

export default function* rootSaga() {
  yield all([taskSaga()]);
}

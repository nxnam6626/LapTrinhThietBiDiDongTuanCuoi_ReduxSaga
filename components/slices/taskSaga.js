import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
} from './taskSlice';

function* fetchTasksSaga() {
  try {
    const response = yield call(axios.get, 'https://api.example.com/tasks');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* addTaskSaga(action) {
  try {
    const response = yield call(axios.post, 'https://api.example.com/tasks', action.payload);
    yield put(addTaskSuccess(response.data));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

export default function* taskSaga() {
  yield takeLatest(fetchTasksRequest.type, fetchTasksSaga);
  yield takeLatest(addTaskRequest.type, addTaskSaga);
}

import { takeEvery, put, call } from 'redux-saga/effects';

// API service implementation
const api = {
  saveTask: async (task) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return task;
    } catch (error) {
      throw new Error('Failed to save task');
    }
  },
  updateTask: async (task) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return task;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  }
};

// Saga for adding new tasks
function* addTaskSaga(action) {
  try {
    const task = yield call(api.saveTask, {
      id: Date.now().toString(),
      title: action.payload,
      completed: false,
    });
    yield put({ type: 'ADD_TASK_SUCCESS', payload: task });
  } catch (error) {
    yield put({ type: 'ADD_TASK_FAILURE', error: error.message });
  }
}

// Saga for updating existing tasks
function* updateTaskSaga(action) {
  try {
    const task = yield call(api.updateTask, action.payload);
    yield put({ type: 'UPDATE_TASK_SUCCESS', payload: task });
  } catch (error) {
    yield put({ type: 'UPDATE_TASK_FAILURE', error: error.message });
  }
}

// Root saga that combines all sagas
export default function* rootSaga() {
  yield takeEvery('ADD_TASK', addTaskSaga);
  yield takeEvery('UPDATE_TASK', updateTaskSaga);
}
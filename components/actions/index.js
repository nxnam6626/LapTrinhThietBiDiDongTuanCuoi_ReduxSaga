// actions/index.js
export const setUserName = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
});

export const addTask = (title) => ({
  type: 'ADD_TASK',
  payload: title,
});

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',
  payload: taskId,
});
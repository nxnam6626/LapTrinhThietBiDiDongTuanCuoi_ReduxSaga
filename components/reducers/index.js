import { combineReducers } from 'redux';

const initialState = {
  userName: '',
  tasks: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null,
      };
    case 'ADD_TASK_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'UPDATE_TASK_SUCCESS':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
        error: null,
      };
    case 'UPDATE_TASK_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
});
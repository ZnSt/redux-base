import { combineReducers } from 'redux';
import { counterReducer } from './counter/reducerCounter';
import { todoReducer } from './todo/reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoReducer,
});

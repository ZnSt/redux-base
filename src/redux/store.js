import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './rootReducer';

export const initialState = {
  counter: {
    count: 0,
    step: 1,
  },

  todoList: {
    todos: [],
    filter: 'all',
  },
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancer);

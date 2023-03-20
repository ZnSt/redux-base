export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// actions creator
export const addTodo = text => ({
  type: ADD_TODO,
  payload: text,
});

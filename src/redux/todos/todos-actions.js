import shortid from 'shortid';
import * as types from './todos-types';

export const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text: text,
    completed: false,
  },
});

export const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

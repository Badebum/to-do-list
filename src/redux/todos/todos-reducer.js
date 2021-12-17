import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './todos-actions';

const items = createReducer([], {
  [actions.fetchTodoSuccess]: (_, { payload }) => payload,
  [actions.addTodoSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const loading = createReducer(false, {
  [actions.addTodoRequest]: () => true,
  [actions.addTodoSuccess]: () => false,
  [actions.addTodoError]: () => false,
  [actions.deleteTodoRequest]: () => true,
  [actions.deleteTodoSuccess]: () => false,
  [actions.deleteTodoError]: () => false,
  [actions.toggleCompletedRequest]: () => true,
  [actions.toggleCompletedSuccess]: () => false,
  [actions.toggleCompletedError]: () => false,
  [actions.fetchTodoRequest]: () => true,
  [actions.fetchTodoSuccess]: () => false,
  [actions.fetchTodoError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

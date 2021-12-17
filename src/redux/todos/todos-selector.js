import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.todos.loading;

export const getFilter = state => state.todos.filter;

export const getAllTodos = state => state.todos.items;

export const getTotalTodoCount = state => {
  const todos = getAllTodos(state);
  return todos.length;
};

export const getComplitedTodoCounter = createSelector([getAllTodos], todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

export const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);

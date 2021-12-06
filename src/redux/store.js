import todosReducer from './todos/todos-reducer';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// const middleware = ;  middleware: () => getDefaultMiddleware().concat(logger),

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

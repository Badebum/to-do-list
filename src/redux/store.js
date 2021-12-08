import todosReducer from './todos/todos-reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import logger from 'redux-logger';

// const middleware = ;  middleware: () => getDefaultMiddleware().concat(logger),

// const todosPersistConfig = {
//   key: 'todos',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // todos: persistReducer(todosPersistConfig, todosReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

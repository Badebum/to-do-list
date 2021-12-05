import { combineReducers, createStore } from 'redux';
import { composeWitchDevTools } from 'redux-devtools-extension';
import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
  items: null,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWitchDevTools);

export default store;

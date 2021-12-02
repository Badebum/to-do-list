import { createStore } from 'redux';
import { composeWitchDevTools } from 'redux-devtools-extension';

const reducer = (state = {}, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer, composeWitchDevTools);

export default store;

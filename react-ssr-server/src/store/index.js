import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = { name: 'dell' }, action) => {
  return state;
};
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

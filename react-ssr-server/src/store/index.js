import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  //  defaultState作为reducer的默认值
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}

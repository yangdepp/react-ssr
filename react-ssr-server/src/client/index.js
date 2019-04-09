import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from '../Routes';

const reducer = (state = { name: 'yang' }, action) => {
  return state;
};
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};

//  hydrate数据的脱水注水
ReactDOM.hydrate(<App />, document.getElementById('root'));

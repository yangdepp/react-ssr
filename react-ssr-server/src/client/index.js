import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};

//  hydrate数据的脱水注水
ReactDOM.hydrate(<App />, document.getElementById('root'));

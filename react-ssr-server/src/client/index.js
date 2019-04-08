import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../Routes';

const App = () => {
  return <BrowserRouter>{Routes}</BrowserRouter>;
};

//  hydrate数据的脱水注水
ReactDOM.hydrate(<App />, document.getElementById('root'));

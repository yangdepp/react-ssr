import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../containers/Home.js';

//  hydrate数据的脱水注水
ReactDOM.hydrate(<Home />, document.getElementById('root'));

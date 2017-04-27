import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

window.apiHost = 'hhttps://commuter-tiy.herokuapp.com/';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

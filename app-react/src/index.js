import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

window.apiHost = 'https://commuter-tiy.herokuapp.com/';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

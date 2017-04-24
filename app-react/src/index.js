import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

window.apiHost = 'https://e861e5c0.ngrok.io';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

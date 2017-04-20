import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

window.apiHost = 'https://99a344d1.ngrok.io';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

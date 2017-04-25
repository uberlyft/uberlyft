import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';

window.apiHost = 'https://secure-harbor-46339.herokuapp.com';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);

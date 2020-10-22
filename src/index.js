import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './App-Class-Component';
import * as serviceWorker from './serviceWorker';
// import AppMonster from './App-Monster-Hard-Coded';
import AppMonsterJson from './App-Monster-Json';

ReactDOM.render(
  <React.StrictMode>
    <AppMonsterJson />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

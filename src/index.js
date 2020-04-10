import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

const liss =  [
    {id:0,name:"Home",link:'/',class:'nav-link'},
    {id:1,name:"Table",link:'/table',class: 'nav-link'},
    {id:2,name:"Last",link:'/last',class: 'nav-link'},
];
ReactDOM.render(
  <React.StrictMode>
    <App liss={liss}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

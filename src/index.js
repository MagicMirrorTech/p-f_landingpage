import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'


import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";

ReactDOM.render( <Router />, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    // <Provider>
    <Router>
        <App/>
    </Router>
    // </Provider>
    ,
    document.getElementById('root')
);


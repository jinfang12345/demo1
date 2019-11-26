import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
const history = createBrowserHistory({
    getUserConfirmation: (message, callback) => {
        console.log('message', message);
        callback(false);
    }
});
ReactDOM.render(
    <App history={history} />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import { createBrowserHistory } from 'history';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
const { confirm } = Modal;
const history = createBrowserHistory({
    getUserConfirmation: (message, callback) => {
        // confirm({
        //     title: '当前编辑信息未保存！是否离开？',
        //     content: '离开后将不保存已填写信息',
        //     okText: '离开',
        //     cancelText: '取消',
        //     onOk(){
        //         callback(true);
        //     },
        //     onCancel() {
        //         callback(false);
        //     }
        // })
        callback(true)
    }
});
ReactDOM.render(
    <App history={history} />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

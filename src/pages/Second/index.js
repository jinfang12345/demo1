import React, {Fragment} from 'react';
import { Prompt } from 'react-router-dom';
import {Button} from "antd";
import './style.scss';

export default class Second extends React.Component{
    state={
        count: null,
    };

    componentDidMount() {
        document.querySelector('#ul').addEventListener('click', this.clickUi);
        // window.document.addEventListener('scroll', function(){
        //     console.log('innerHeigth', window.innerHeight);
        //     console.log('scrollHeight',document.documentElement.scrollHeight);
        // })
    }

    clickUi = (e) => {
        console.log('click');
        this.setState({
            count: 1,
        });
        this.setState({
            count: 2,
        });
        this.setState({
            count: 3,
        });
    };

    componetWillUnMount(){

    }

    backToTop = () => {
        window.scrollTo(0, 0);
    };

    goBottom = () => {
        window.scrollTo(0, document.querySelector('#root').clientHeight);
    };

    fullScreen = () => {
        window.parent.postMessage('hello',
            'http://localhost:10086'
            )
    };

    render() {
        const dataSource = new Array(50).fill(5);
        return (
            <Fragment>
                <Prompt message='121212' when={true} />
                <div onClick={() => {console.log('hello world')}}>
                    <ul id='ul'>
                        {
                            dataSource.map((item, index) => (
                                <li style={{ height: 30 }} key={index}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <span>count:{this.state.count}</span>
                <div style={{ position: 'fixed', bottom: 20, right: 50 }}>
                    <Button onClick={this.backToTop}>回到頂部</Button>
                    <Button onClick={this.goBottom}>回到底部</Button>
                    <Button onClick={this.fullScreen}>全屏</Button>
                </div>
            </Fragment>
        )
    }
}
import React from 'react';

export default class Second extends React.Component{
    componentDidMount() {
        document.body.addEventListener('click', function(){
           console.log('click now');
        });
    }

    render() {
        return (
            <div onClick={() => {console.log('hello world')}}>
                12232
            </div>
        )
    }
}
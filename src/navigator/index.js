import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Navigator extends React.PureComponent{
    render(){
        return (
            <ul>
                <li>
                    <Link to={{ pathname:'/first' }}>First</Link>
                </li>
                <li>
                    <Link to={{ pathname:'/second' }}>Second</Link>

                </li>
                <li>
                    <Link to={{ pathname:'/third' }}>Third</Link>
                </li>
            </ul>
        )
    }
}
export default withRouter(Navigator)
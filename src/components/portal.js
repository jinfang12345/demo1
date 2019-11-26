import { PureComponent } from 'react';
import { createPortal } from 'react-dom';

export default class Portal extends PureComponent {

    container = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    render() {
        return (
             createPortal(this.props.children, this.container)
        );
    }
}


import React, {Component} from 'react';

class Header extends Component {
    render() {
        const {text} = this.props;

        return (
            <h1>{text}</h1>
        );
    }
}

export default Header;
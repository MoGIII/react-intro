import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <li>
                <a href={this.props.route}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

export default MenuItem;

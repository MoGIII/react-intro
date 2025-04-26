import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true
        };
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>Toggle</button>
                {this.state.visible && <div>Text Text Text Text Text Text Text</div>}
            </div>
        );
    }
}

export default Toggle;

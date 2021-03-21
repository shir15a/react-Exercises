import React, { Component } from 'react';
import './sBar.css'

class Searchbar extends Component {
    render() {
        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Searchbar;
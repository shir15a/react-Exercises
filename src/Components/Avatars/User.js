import React, { Component } from 'react';
import './User.css'
class User extends Component {
    render() {
        return (
            <div className='box'>
                <img 
                    src={this.props.avatar}
                    alt={this.props.name}
                />
                <div className='name'>{this.props.name}</div>
            </div>
        );
    }
}

export default User;
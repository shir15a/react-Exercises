import React, { Component } from 'react'

export default class Name extends Component {

    render() {
        return (
            <div>
                <p style={{textAlign:'center'}}>{this.props.name}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Child from './Child';

const colors = ["pink", "green","yellow"];

export default class ChildApp extends Component {
    state = { color: '' }


    changeColor(color) {
		this.setState({ color: color });
	}

    render() {
        return (
            <div>
                {colors.map((color) => {
                    return< Child color={color}

                    onClick={(color) => this.changeColor(color)} />
                })}

                <h1 style={{color:this.state.color}}>{`Color: ${this.state.color}`}</h1>
            </div>
        )
    }
}




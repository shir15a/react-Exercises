import React, { Component } from 'react'

export default class Child extends Component {
    state = { color: this.props.color };

    onClickColor (e){
       this.props.onClickEvent(this.state.color)
   }

    render() {
        return (
            <div>
                <button style=
                    {{
                        width: '100px',
                        height: '50px',
                        backgroundColor: this.state.color
                    }}onClick={() => this.props.onClick(this.state.color)}>{this.state.color}</button>
            </div>)

    }
}


import React, { Component } from 'react'

export default class Focus extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="text" ref = {this.inputRef}></input>
            </div>
        )
    }
}

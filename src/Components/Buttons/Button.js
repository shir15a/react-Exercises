import react from 'react';

class Button extends react.Component{
    constructor(props){
        super()
    }

    render(){
        return <button style={this.props.style}>{this.props.name}</button>    }
}

export default Button;
import react from 'react';

class LifeCycleMethods extends react.Component {
    constructor(props) {
        super()
        this.state = { color: 'blue', msg: ''};
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({ color: 'red' })
            this.setState({msg: `The updated favorite color is ${this.state.color}`})
        }, 1000);
    }

    render() {
        return (<div>
            <h1 style={{color:this.state.color}}>my favorite color is {this.state.color}</h1>
            <div>{this.state.msg}</div>
        </div>)
    }
}

export default LifeCycleMethods;
import react from 'react';

class LifeCycleMethods extends react.Component {
    constructor(props) {
        super()
        this.state = { color: 'blue' };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'red' })
        }, 1000);
    }

    componentDidUpdate() {
        document.querySelector("#attribute").innerHTML = `The updated favorite color is ${this.state.color}`;
    }

    render() {
        return <div>
            <h1>my favorite color is {this.state.color}</h1>
            <div id="attribute"></div>
        </div>
    }
}

export default LifeCycleMethods;
import react from 'react';

class Increment extends react.Component {
    constructor(props) {
        super()

        this.state = { counter: 0 };
    }
    increase = () => {
        this.setState({ counter: this.state.counter + 1 })

    }


    render() {
        return (<div>
            <button onClick={this.increase}>Increment</button>
            <p>{this.state.counter}</p>
        </div>);
    }
}

export default Increment;


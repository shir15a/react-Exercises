import react from 'react';
import './style.css'

class BoxAnimation extends react.Component {
    constructor(props) {
        super()
        this.state = { className: '' }
    }

    componentDidMount() {
        this.setState({ className: "in" })
        setTimeout(() => {
            this.setState({ className: "out" })
        }, 4000)
    }

    render() {
        return <div className={this.state.className}
            style=
            {{
                width: this.props.width,
                height: this.props.height,
                backgroundColor: this.props.color
            }}
        ></div>
    }
}

export default BoxAnimation;
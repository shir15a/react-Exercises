import react from 'react';
import './style.css'


class HideAndSeek extends react.Component {
    constructor(props) {
        super()

        this.state = { display: 'block' };
    }
    hideOrShow = () => {
        if (this.state.display === 'block')
            this.setState({ display: 'none' })
        else
            this.setState({ display: 'block' })
    }


    render() {
        return (
            <div>
                <button onClick={this.hideOrShow}>show/ hide</button>
                {this.state.display &&
                    <div className="box" style={{ display: `${this.state.display}` }}>

                    </div>
                }
            </div>
        );
    }
}

export default HideAndSeek;


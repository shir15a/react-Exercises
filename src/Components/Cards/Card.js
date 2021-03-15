import react from 'react';

class Card extends react.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className='card'>
            <img src={this.props.source} alt={this.props.title} />
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <a href={this.props.share}>Share</a>
            <a href={this.props.explore}>Explore</a>

        </div>
    }
}

export default Card;
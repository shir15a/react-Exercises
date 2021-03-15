import react from 'react';
import Card from './Card'
import './Card.css'

class Cards extends react.Component {
    constructor(props) {
        super()
    }

    render() {
        return (<div>
            <Card
                source={'https://picsum.photos/200/300'}
                title={'lorem'}
                description={'lorem picsum'}
                share={'https://picsum.photos/'}
                explore={'https://unsplash.com/'}
            />
            <Card
                source={'https://picsum.photos/200/300'}
                title={'lorem'}
                description={'lorem picsum'}
                share={'https://picsum.photos/'}
                explore={'https://unsplash.com/'}
            />
            <Card
                source={'https://picsum.photos/200/300'}
                title={'lorem'}
                description={'lorem picsum'}
                share={'https://picsum.photos/'}
                explore={'https://unsplash.com/'}
            />
        </div>);
    }
}

export default Cards;


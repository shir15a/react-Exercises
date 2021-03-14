
import react from 'react';
import QuizTitle from './QuizTitle'
import Q1 from './Q1'
import Q2 from './Q2'
import './style.css'

class Quiz extends react.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="container">
            <QuizTitle />
            <Q1 />
            <Q2 />
        </div>
    }
}

export default Quiz;

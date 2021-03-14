
import react from 'react';
import Q2Title from './Q2Title'
import Q2Input from './Q2Input'
import './style.css'

class Q2 extends react.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div>
            <Q2Title />
            <Q2Input />
        </div>
    }
}

export default Q2;
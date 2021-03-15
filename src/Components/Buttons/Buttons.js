import react from 'react';
import Button from './Button'

class Buttons extends react.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div>
            <Button name="Important" style={{fontWeight: "bold", marginRight:"20px"}} />
            <Button name="Not Important" />
        </div>
    }
}

export default Buttons;
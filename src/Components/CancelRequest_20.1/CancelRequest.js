import React, { useState, useEffect } from 'react';
import Joke from './Joke';

function CancelRequest() {
    const [display, setDisplay] = useState(false);


    return (
        <div>
            <button onClick={() => { setDisplay(!display) }}>click!</button>
            <span>{display ? <Joke/> : ''}</span>
        </div>)
    
}

export default CancelRequest



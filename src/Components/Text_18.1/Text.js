import React, { useState } from 'react';


function Text({ string, maxLength }) {
    const [hidden, setHidden] = useState(true);

    if (string.length <= maxLength) {
        return <p>{string}</p>
    }

    return (
        <p>
            {hidden ? `${string.substr(0, maxLength)} ...` : string}
            {hidden ? ( <a style={{color:'blue'}} onClick={() => setHidden(false)}> read more</a>) : 
            (<a style={{color:'blue'}} onClick={() => setHidden(true)}> show less</a>)}
        </p>
    );
}

export default Text
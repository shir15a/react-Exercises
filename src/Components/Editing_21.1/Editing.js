import React, { useState, useEffect, useRef } from 'react'

function Editing() {
    const [isEditing, setEditing] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (isEditing) {
          inputRef.current.focus();
        }
      }, [isEditing]);
      
    return (
        <div>
            {!isEditing ?
                <button onClick={() => setEditing(!isEditing)}>edit</button>
                : <div><input ref={inputRef} type='text'></input>
                <button  onClick={() => setEditing(!isEditing)}>Save</button>
                </div>}
        </div>
    )
}

export default Editing

import React, { useState } from 'react';

const arr = ["one", "two", "three", "four", "five"];


const MarkingDeleting = () => {

    const [data, setData] = useState(arr);

    return (
        <div>
            <button>Delete</button>
            <button>Reset</button><br></br>
            {data.map((number, index)=>{
                return (<div>
                    <input type='checkbox' id={index} name= {number}></input>
                    <label> {arr[index]}</label><br></br>
                    </div>)
            })}
    </div>
    )
}

export default MarkingDeleting;




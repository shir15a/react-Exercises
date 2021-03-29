import React, { useState } from 'react';

const MarkingDeleting = () => {

    const arr = ["one", "two", "three", "four", "five"];

    return (
        <div>
            <button>Delete</button>
            <button>Reset</button><br></br>
            {arr.map((number, index)=>{
                return (<div>
                    <input type='checkbox' id={index} name= {number}></input>
                    <label> {arr[index]}</label><br></br>
                    </div>)
            })}
    </div>
    )
}

export default MarkingDeleting;




import React from "react"

const arr = ["Hello", "World"];
const number1 = 5;
const number2 = 6;
const string = "I love React!"

const Basic = () => {
    return (<div>
        {arr.join(' ')}
        <br></br>
        {number1} + {number2}
        <br></br>
        {string.length}
    </div >);
};

export default Basic;
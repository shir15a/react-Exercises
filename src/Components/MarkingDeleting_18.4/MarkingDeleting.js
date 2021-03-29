import React, { useState } from 'react';

const numbers = ["one", "two", "three", "four", "five"];

const MarkingDeleting = () => {

    const [data, setData] = useState(numbers.map(number => ({number, checked: false})));
    
    const resetCheckbox = () => {
        setData(numbers.map(item => ({number: item, checked: false})));
    }

    const deleteCheckbox = () => {
        const newData = data.filter(item => (!item.checked));
        setData(newData);
    }

    const checkboxChanged = (index) => {
        const newData = [...data];
        newData[index].checked = newData[index].checked ? false : true;
        setData(newData);
    }
    

   

    return (
        <div>
            <button onClick={deleteCheckbox}>Delete</button>
            <button onClick={resetCheckbox}>Reset</button><br></br>
            {data.map((item, index) => {
                return (<div>
                    <input type='checkbox' key={index} name={item.number} checked={item.checked} onChange={() => checkboxChanged(index)}></input>
                    <label> {item.number}</label><br></br>
                </div>)
            })}
        </div>
    )
}

export default MarkingDeleting;




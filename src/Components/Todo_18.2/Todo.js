import React, { useState } from 'react';


function Todo({ programmingLanguages }) {

    const [data, setData] = useState(programmingLanguages);

    const changeCompleted = (index) => {
        const newData = [...data];
        console.log(newData);
        newData[index].completed = newData[index].completed ? false : true;
        setData(newData);
    }

    return (
        <div>
            {data.map((item, index) => (
                <div onClick={() => changeCompleted(index)} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                    {item.name}
                </div>
            ))}
        </div>)
}

export default Todo

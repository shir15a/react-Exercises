import React, { useState } from 'react';

const WhatsTheTime = () => {
    const [sec, setSec] = useState('');

    const inputChange = (e) => {
        if (e.target.name === 'seconds') setSec(e.target.value)
        else if (e.target.name === 'minutes') setSec(e.target.value * 60)
        else setSec(e.target.value * 3600)

    }

    return (
        <div>
            <label>Seconds: </label>
            <input type='number' name='seconds' value={sec} onChange={inputChange}></input>
            <br />
            <label>Minutes: </label>
            <input type='number' name='minutes' value={sec / 60} onChange={inputChange}></input>
            <br />
            <label>Hours: </label>
            <input type='number' name='hours' value={sec / 3600} onChange={inputChange}></input>
        </div>
    )
}

export default WhatsTheTime;

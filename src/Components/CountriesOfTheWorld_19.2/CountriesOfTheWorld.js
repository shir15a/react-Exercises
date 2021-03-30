import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesOfTheWorld = () => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const myData = async () => {
            let respone = await axios.get('https://restcountries.eu/rest/v2/all');
            console.log(respone.data);
            setData(respone.data)
        };

        myData();
    }, []);

    const countryInput = (e) => {
        const input = e.target.value;
        setInput(input.charAt(0).toUpperCase() + input.slice(1))
    }

    return (
        <div>
            <input type='text' name='countryToSearch' onChange={countryInput} placeholder='Enter country'></input>
            {data.filter((item) => item.name.startsWith(input)).map((country) => { return (<p>{country.name}</p>) })}
        </div>)
}

export default CountriesOfTheWorld;

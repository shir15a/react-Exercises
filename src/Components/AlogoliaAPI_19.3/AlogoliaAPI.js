import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlogoliaAPI = () => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('hooks');

    useEffect(() => {
        const myData = async () => {
            let respone = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
            console.log(respone.data);
            setData(respone.data.hits)
        };

        myData();
    }, [search]);

    const inputSearch = (e) => {
        const input = e.target.value;
        setInput(input)
        console.log(input);
    }

    const newSearch = ()=>{
        console.log('shie');
        setSearch(input)
    }

    return (
        <div>
            <input type='text' name='countryToSearch' onChange={inputSearch}></input>
            <button onClick={newSearch} >Search!</button>
            {data.map((item)=>{return <p><a href={item.url}>{item.title}</a></p>})}
        </div>)
}

export default AlogoliaAPI;


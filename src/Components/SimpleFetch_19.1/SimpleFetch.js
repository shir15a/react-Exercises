import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleFetch = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const myData = async () => {
            let respone = await axios.get('https://swapi.dev/api/films/1');
            console.log(respone);
            setData(respone.data)
        };

        myData();
    }, []);


    

    return (
        <div>
        Title : {data.title}, Director: {data.director}
        </div>
    );
}

export default SimpleFetch;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisHooks = () => {

    const [joke, setJoke] = useState('');
    const [categories, setCategories] = useState([]);
    const [jokeBycategories, setJokeBycategories] = useState('');

    const getNewJoke = () => {
        (async () => {
            const newJoke = await axios.get('https://api.chucknorris.io/jokes/random');
            setJoke(newJoke.data.value);
        })()
    }

    useEffect(() => {
        const myData = async () => {
            let respone = await axios.get('https://api.chucknorris.io/jokes/categories');
            console.log(respone.data);
            setCategories(respone.data)
        };
        myData();
    }, []);


    const getJokeByCategory = async (e) => {
        const category = e.target.value;
        console.log(category);
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        console.log(response.data.value);
        setJokeBycategories(response.data.value);
    }

    return (
        <div>
            <button onClick={getNewJoke}>Joke!</button>
            <p>{joke}</p>
            <br></br>

            <select name="categories" onChange = {getJokeByCategory}>
                {categories.map(value => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
            <p>{jokeBycategories}</p>
        </div>)
}

export default ChuckNorrisHooks;


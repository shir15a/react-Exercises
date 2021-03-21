import React, { Component } from 'react';
import axios from 'axios';

export default class ChuckNorris extends Component {
    state = {joke:''}
     chuckNorrisJokes = async()=>{
        const resposne = await axios.get('https://api.chucknorris.io/jokes/random')
        this.setState({joke: resposne.data.value})

    }

    render() {
        return (
            <div>
                <button onClick={this.chuckNorrisJokes}>ChuckNorris</button>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}


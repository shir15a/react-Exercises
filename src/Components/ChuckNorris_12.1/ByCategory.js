import axios from 'axios'
import React, { Component } from 'react'


export default class ByCategory extends Component {
    state = { categories: [], joke: '' }


    getJoke = async (e) => {
        const category = e.target.value;
        const resposne = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        this.setState({ joke: resposne.data.value })
    }
    
    componentDidMount = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({ categories: response.data })
    }


    render() {
        return (
            <div>
                <select name="categories" onChange={this.getJoke} >
                    {this.state.categories.map(value => {
                        return <option value={value}>{value}</option>
                    })}
                </select>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}

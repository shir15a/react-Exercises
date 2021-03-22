import React, { Component } from 'react'
import axios from 'axios';
import Searchbar from './S_Bar';
import User from './User';


export default class Avatars extends Component {
    state = {
        search: "",
        users: []
    }

    async componentDidMount() {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        console.log(response);
        this.setState({
            users: response.data.results.map(user => {
                return ({
                    name: user.name.first +' '+ user.name.last,
                    avatar: user.picture.large
                })
            })
        });
    }

    onInputChange(e) {
        console.log(e.target.value);
        this.setState({ search: e.target.value })
    }

    render() {
        return (
            <div>
                <Searchbar
                    value={this.state.value}
                    onChange={(e) => this.onInputChange(e)}/>
                <div>
                    {
                        this.state.users
                            .filter(user => (
                                user.name.toLowerCase().includes(this.state.search.toLowerCase())
                            ))
                            .map(user => (
                                <User
                                    name={user.name}
                                    avatar={user.avatar}
                                />
                            ))
                    }
                </div>
            </div>
        );
    }
}

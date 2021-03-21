import React, { Component } from 'react'
import data from './Data'
import Name from './Name'
import Card from './Card'

export default class DataMassaging extends Component {
    // state = {data: data}
    state = {data}

    names = () => {
        console.log(this.state.data.map(person=> person.name));
        return this.state.data.map(person => person.name)
    }

    // "1-1-1995" => ['1','1','1995']
    bornBefore1990 = () => {
        console.log((this.state.data.filter(person => (parseInt(person.birthday.split('-')[2]) < 1990))));
        return (this.state.data.filter(person => (parseInt(person.birthday.split('-')[2]) < 1990)));
    }

    render() {
        return (
            <div>
                {this.names().map(name => {
                    return <Name name={name} key={name} />
                })}
                {this.bornBefore1990().map(person => {
                    return <Card person={person} key={person.name}/>
                })}
            </div>
            
        )
    }
}

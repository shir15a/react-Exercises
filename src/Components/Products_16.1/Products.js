import data from './Store'

import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Products extends Component {
    state = { data }
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}}>
                {this.state.data.map((item) => (
                    <Link to={`/products/${item.id}`} key={item.id} >
                        {item.title}
                    </Link>
                ))}
            </div>
        )
    }
}

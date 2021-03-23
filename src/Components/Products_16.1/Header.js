import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './style.css'


export default class Header extends Component {
    render() {
        return (
            <div className='nav'>
                <ul className='nav-m' >
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Products'><li>Products</li></Link>
                </ul>
                
            </div>
        )
    }
}

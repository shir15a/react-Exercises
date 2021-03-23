import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header'
import Homepage from './HomePage';
import Products from './Products';
import Item from './Item';



export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/products' exact component={Products} />
                        <Route path='/products/:id' component={Item} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

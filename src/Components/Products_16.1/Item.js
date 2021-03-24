import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Products from './Products';
import data from './Store';

export default class Item extends Component {
    render() {
        const product = data[this.props.match.params.id - 1]
        return (
            <div>
                <div className="product">
                    <h1>{product.title}</h1>
                    <h3>price: {product.price}</h3>
                    <img src={product.imageUrl} />
                    <Link to="/products">
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        );
    }
}




import React, { Component } from 'react'
import './ListProductComponent.sass';
import {Link } from 'react-router-dom';

export default class ListProductComponent extends Component {
    
    product = this.props.product;

    render() {
        return (
            <div className="row item">
                <Link to={`/items/${this.product.id}`} className="link">
                    <div className="img-box">
                        <img className="product-img" src={this.product.picture} alt={this.product.name}/>
                    </div>
                </Link>
                <div className="item-information">
                    <Link to={`/items/${this.product.id}`} className="link">
                        <label className="price">$ {this.product.price?.amount}</label>
                        <p className="title">{this.product.title}</p>
                    </Link>
                </div>
                <div className="city">
                    {this.product.city}
                </div>
            </div>
                
        )
    }
}

import React, { Component } from 'react'
import './ListProductsComponent.sass';
import ListProductComponent from '../ListProductComponent/ListProductComponent';
import MetaTags from 'react-meta-tags';

export default class ListProductsComponent extends Component {
    render() {
        if(this.props.products === undefined || this.props.products.length===0) {
            return(
                <div></div>
            );
        }
        else {
            return(
                <div className="row center-xs ">
                    <MetaTags>
                        <title>Busqueda - MercadoLibre</title>
                    </MetaTags>
                    <div className="col-xs-10">
                        <div className="breadcrums">
                            {
                                this.props.categories.map((task, index)=>
                                {
                                   return (
                                       <span key={index} className={(this.props.categories.length-1===index)?'strong':''}>{task} {(this.props.categories.length-1===index)?'':'>'} </span>
                                   )
                                })
                            }
                        </div> 
                        <div className="box">
                            {
                                this.props.products.map(product => <ListProductComponent key={product.id} product={product}/> )
                            }
                        </div>
                    </div>
                </div>  
            );
        }
    }
}

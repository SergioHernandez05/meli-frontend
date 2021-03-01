import React from 'react'
import { useParams } from 'react-router'
import { BACKEND_ENDPOINT } from '../../constants';
import './ProductComponent.sass';
import MetaTags from 'react-meta-tags';

const ProductComponent = () => {

    const {id} = useParams();

    const [product, setProduct] = React.useState([]);

    React.useEffect(()=>{
        const getProductData = async (query) => {
            const response = await fetch(`${BACKEND_ENDPOINT}/api/items/${id}`);
            const data = await response.json();
            console.log(data);
            if(data)
                setProduct(data.item);
        }
        getProductData();
    }, [id]);

    

    return (
        <div className="row center-xs ">
            <MetaTags>
                <title>{product.title} - MercadoLibre</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={product.title} />
                <meta property="og:image" content={product.picture} />
            </MetaTags>
            <div className="col-xs-10">
                <div className="box product-detail">
                    <div className="image">
                        <img src={product.picture} alt={product.title} className="img-product"/>
                        <div className="description-box">
                            <label className="description-title">Descripción del producto</label>
                            <p className="description-text">{product.description}</p>
                        </div>
                    </div>
                    <div className="product-information">
                        <div>
                            <span className="text-state">{(product.condition==='new')?'Nuevo':'Usado'} - {product.sold_cuantity} vendidos</span>
                        </div> 
                        <div className="text-title">
                            {product.title}
                        </div>
                        <div className="price-text">
                            $ {product.price?.amount}
                        </div>
                        <div className="button-box">
                            <button type="button" className="button">Comprar</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default ProductComponent
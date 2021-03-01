import {Product}  from './models/MeliProduct';
import {CustomProduct} from './models/CustomProduct';
import { Prices } from "./models/MeliPriceTypes";
import { Filter } from "./models/MeliFilter";
import { MeliProductResponse } from './models/MeliProductResponse';
import { Constants } from './constants';

export const filterCategories = (filters:Filter[]) => {

    const filter =filters.filter((data) => data.id === Constants.ID_CATEGORY).shift();
    if(filter){
        let listCategories = [];
        filter.values.forEach((categories)=> {
            if(categories.path_from_root)
                categories.path_from_root.forEach((category)=> listCategories.push(category.name))
        });
        return listCategories;
    }
    return [];
}

export const filterItems:any = (products:Product[])=>{
    let newProducts:CustomProduct[] = [];
    let newProduct: CustomProduct;
    products.forEach((product)=>{
        newProduct = {
            id: product.id,
            title: product.title,
            price: filterPrices(product.prices),
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.address.city_name
        }
        newProducts.push(newProduct);
    });
    return newProducts;
}

export const filterItem = (product:MeliProductResponse)=>{
    let newProduct: CustomProduct = {
        id: product.id,
        title: product.title,
        price: {currency:product.currency_id, amount: product.price},
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_cuantity: product.sold_quantity,
    }
    return newProduct;
}

const filterPrices= (prices:Prices) =>{
    if(prices.prices)
    {
        const price = prices.prices.shift();
        return {currency: price.currency_id,amount: price.amount}
    }
    else
        return null;
}

import { Request, Response } from "express";
import { ajax } from 'rxjs/ajax';
import { map, pluck, tap } from 'rxjs/operators';
import { MeliSearchResponse } from '../models/MeliSearchResponse'
import { filterCategories, filterItem, filterItems } from '../helpers';
import { Constants } from "../constants";
import { MeliProductResponse } from '../models/MeliProductResponse';
import { forkJoin, from } from "rxjs";
import { CustomProduct } from "../models/CustomProduct";
import axios from "axios";


export let products = (req: Request, res: Response) => {

    const query = req.query.q;
    if(query){

        from(axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`))
        .pipe(
            map<any, MeliSearchResponse>((response)=> response.data),
            map(( {results, filters})=>(
                {
                    author: Constants.SIGNATURE,
                    categories: filterCategories(filters),
                    items: filterItems(results).slice(0,Constants.CUANTITY_PRODUCTS)
                })
            ),
        ).subscribe((data)=>{
            res.json(data)
        });
    }
    else{
        res.json(Constants.NULL_RESPOSE);
    }
};

const httpLoginRequest = (id)=>
from(axios.get(`https://api.mercadolibre.com/items/${id}/description`))
.pipe(
    map((response)=> response.data),
    pluck('plain_text')
);


export let product = (req: Request, res: Response) => {
    const id = req.params.id;
    if(id) {

        forkJoin({
            item: from(axios.get(`https://api.mercadolibre.com/items/${id}`))
                .pipe(
                    map<any, MeliProductResponse>((response)=> response.data ),
                    map<MeliProductResponse, CustomProduct>((data)=> filterItem(data))
                ),
            description: httpLoginRequest(id)
        
        }).pipe(
            map(({item, description})=>({
                author: Constants.SIGNATURE,
                item: {...item, description}
            })),
        ).subscribe((data)=>{
            res.json(data)
        })
    }
    else{
        res.json(Constants.NULL_RESPOSE);
    }
}
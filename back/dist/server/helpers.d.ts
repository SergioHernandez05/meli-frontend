import { CustomProduct } from './models/CustomProduct';
import { Filter } from "./models/MeliFilter";
import { MeliProductResponse } from './models/MeliProductResponse';
export declare const filterCategories: (filters: Filter[]) => any[];
export declare const filterItems: any;
export declare const filterItem: (product: MeliProductResponse) => CustomProduct;

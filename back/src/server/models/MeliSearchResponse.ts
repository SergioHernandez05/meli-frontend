import { Filter, Sort } from "./MeliFilter";
import { Product } from "./MeliProduct";

export interface MeliSearchResponse {
    site_id:           string;
    query:             string;
    paging:            any;
    results:           Product[];
    secondary_results: any[];
    related_results:   any[];
    sort:              Sort;
    available_sorts:   Sort[];
    filters:           Filter[];
    available_filters: any;
}
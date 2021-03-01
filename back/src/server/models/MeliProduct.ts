import { Prices } from "./MeliPriceTypes";

export interface Product {
    id:                    string;
    site_id:               string;
    title:                 string;
    seller:                any;
    price:                 number;
    prices:                Prices;
    sale_price:            null;
    currency_id:           string;
    available_quantity:    number;
    sold_quantity:         number;
    buying_mode:           string;
    listing_type_id:       string;
    stop_time:             Date;
    condition:             string;
    permalink:             string;
    thumbnail:             string;
    thumbnail_id:          null | string;
    accepts_mercadopago:   boolean;
    installments:          any;
    address:               any;
    shipping:              any;
    seller_address:        any;
    attributes:            any;
    original_price:        number | null;
    category_id:           any;
    official_store_id:     null;
    domain_id:             any;
    catalog_product_id:    null;
    tags:                  string[];
    order_backend:         number;
    use_thumbnail_id:      boolean;
    differential_pricing?: any;
}
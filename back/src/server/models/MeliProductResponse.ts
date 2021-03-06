export interface MeliProductResponse {
    id:                               string;
    site_id:                          string;
    title:                            string;
    subtitle:                         null;
    seller_id:                        number;
    category_id:                      string;
    official_store_id:                null;
    price:                            number;
    base_price:                       number;
    original_price:                   null;
    currency_id:                      string;
    initial_quantity:                 number;
    available_quantity:               number;
    sold_quantity:                    number;
    sale_terms:                       any;
    buying_mode:                      string;
    listing_type_id:                  string;
    start_time:                       Date;
    stop_time:                        Date;
    condition:                        string;
    permalink:                        string;
    thumbnail_id:                     string;
    thumbnail:                        string;
    secure_thumbnail:                 string;
    pictures:                         any;
    video_id:                         null;
    descriptions:                     any;
    accepts_mercadopago:              boolean;
    non_mercado_pago_payment_methods: any;
    shipping:                         any;
    international_delivery_mode:      string;
    seller_address:                   any;
    seller_contact:                   null;
    location:                         any;
    coverage_areas:                   any;
    attributes:                       any;
    warnings:                         any;
    listing_source:                   string;
    variations:                       any;
    status:                           string;
    sub_status:                       any;
    tags:                             string[];
    warranty:                         string;
    catalog_product_id:               string;
    domain_id:                        string;
    parent_item_id:                   null;
    differential_pricing:             null;
    deal_ids:                         any;
    automatic_relist:                 boolean;
    date_created:                     Date;
    last_updated:                     Date;
    health:                           number;
    catalog_listing:                  boolean;
}
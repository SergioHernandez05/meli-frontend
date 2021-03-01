import { Type } from "typescript";

export interface Prices {
    id?:                    string;
    prices?:                Price[];
    presentation?:          any;
    payment_method_prices?: any[];
}

export interface Price {
    id:                    string;
    type:                  Type;
    conditions:            any;
    amount:                number;
    regular_amount:        number | null;
    currency_id:           any;
    exchange_rate_context: any;
    metadata:              any;
    last_updated:          Date;
}
export interface CustomProduct {
    id: string;
    title: string;
    price?: {
        currency: string;
        amount: number;
    };
    picture: string;
    condition: string;
    city?: string;
    free_shipping: boolean;
    sold_cuantity?: number;
    description?: string;
}
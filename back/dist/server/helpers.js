"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterItem = exports.filterItems = exports.filterCategories = void 0;
const constants_1 = require("./constants");
const filterCategories = (filters) => {
    const filter = filters.filter((data) => data.id === constants_1.Constants.ID_CATEGORY).shift();
    if (filter) {
        let listCategories = [];
        filter.values.forEach((categories) => {
            if (categories.path_from_root)
                categories.path_from_root.forEach((category) => listCategories.push(category.name));
        });
        return listCategories;
    }
    return [];
};
exports.filterCategories = filterCategories;
const filterItems = (products) => {
    let newProducts = [];
    let newProduct;
    products.forEach((product) => {
        newProduct = {
            id: product.id,
            title: product.title,
            price: filterPrices(product.prices),
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.address.city_name
        };
        newProducts.push(newProduct);
    });
    return newProducts;
};
exports.filterItems = filterItems;
const filterItem = (product) => {
    let newProduct = {
        id: product.id,
        title: product.title,
        price: { currency: product.currency_id, amount: product.price },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_cuantity: product.sold_quantity,
    };
    return newProduct;
};
exports.filterItem = filterItem;
const filterPrices = (prices) => {
    if (prices.prices) {
        const price = prices.prices.shift();
        return { currency: price.currency_id, amount: price.amount };
    }
    else
        return null;
};

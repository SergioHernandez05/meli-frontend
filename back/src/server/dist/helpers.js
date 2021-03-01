"use strict";
exports.__esModule = true;
exports.filterItem = exports.filterItems = exports.filterCategories = void 0;
var constants_1 = require("./constants");
exports.filterCategories = function (filters) {
    var filter = filters.filter(function (data) { return data.id === constants_1.Constants.ID_CATEGORY; }).shift();
    if (filter) {
        var listCategories_1 = [];
        filter.values.forEach(function (categories) {
            if (categories.path_from_root)
                categories.path_from_root.forEach(function (category) { return listCategories_1.push(category.name); });
        });
        return listCategories_1;
    }
    return [];
};
exports.filterItems = function (products) {
    var newProducts = [];
    var newProduct;
    products.forEach(function (product) {
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
exports.filterItem = function (product) {
    var newProduct = {
        id: product.id,
        title: product.title,
        price: { currency: product.currency_id, amount: product.price },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_cuantity: product.sold_quantity
    };
    return newProduct;
};
var filterPrices = function (prices) {
    if (prices.prices) {
        var price = prices.prices.shift();
        return { currency: price.currency_id, amount: price.amount };
    }
    else
        return null;
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = exports.products = void 0;
const operators_1 = require("rxjs/operators");
const helpers_1 = require("../helpers");
const constants_1 = require("../constants");
const rxjs_1 = require("rxjs");
const axios_1 = __importDefault(require("axios"));
let products = (req, res) => {
    const query = req.query.q;
    if (query) {
        rxjs_1.from(axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`))
            .pipe(operators_1.map((response) => response.data), operators_1.map(({ results, filters }) => ({
            author: constants_1.Constants.SIGNATURE,
            categories: helpers_1.filterCategories(filters),
            items: helpers_1.filterItems(results).slice(0, constants_1.Constants.CUANTITY_PRODUCTS)
        }))).subscribe((data) => {
            res.json(data);
        });
    }
    else {
        res.json(constants_1.Constants.NULL_RESPOSE);
    }
};
exports.products = products;
const httpLoginRequest = (id) => rxjs_1.from(axios_1.default.get(`https://api.mercadolibre.com/items/${id}/description`))
    .pipe(operators_1.map((response) => response.data), operators_1.pluck('plain_text'));
let product = (req, res) => {
    const id = req.params.id;
    if (id) {
        rxjs_1.forkJoin({
            item: rxjs_1.from(axios_1.default.get(`https://api.mercadolibre.com/items/${id}`))
                .pipe(operators_1.map((response) => response.data), operators_1.map((data) => helpers_1.filterItem(data))),
            description: httpLoginRequest(id)
        }).pipe(operators_1.map(({ item, description }) => ({
            author: constants_1.Constants.SIGNATURE,
            item: { ...item, description }
        }))).subscribe((data) => {
            res.json(data);
        });
    }
    else {
        res.json(constants_1.Constants.NULL_RESPOSE);
    }
};
exports.product = product;

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.product = exports.products = void 0;
var ajax_1 = require("rxjs/ajax");
var operators_1 = require("rxjs/operators");
var helpers_1 = require("../helpers");
var constants_1 = require("../constants");
var rxjs_1 = require("rxjs");
var axios_1 = require("axios");
exports.products = function (req, res) {
    var query = req.query.q;
    if (query) {
        var responsePromise = axios_1["default"].get('https://jsonplaceholder.typicode.com/todos/1');
        var response$ = rxjs_1.from(responsePromise);
        response$
            .pipe(operators_1.map(function (response) { return ({ type: 'RESPONSE_RECEIVED', payload: response.data }); }))
            .subscribe(function (data) {
            res.json(data);
        });
        // ajax({
        //     url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
        //     method: 'GET',
        //     createXHR,
        // }).pipe(
        //     map<any, MeliSearchResponse>((data)=> JSON.parse(data.xhr.responseText)),
        //     map(( {results, filters})=>(
        //         {
        //             author: Constants.SIGNATURE,
        //             categories: filterCategories(filters),
        //             items: filterItems(results)
        //         })
        //     ),
        // ).subscribe((data)=>{
        //     res.json(data)
        // })
    }
    else {
        res.json({});
    }
};
var httpLoginRequest = function (id) { return ajax_1.ajax({
    url: "https://api.mercadolibre.com/items/" + id + "/description",
    method: 'GET',
    createXHR: helpers_1.createXHR
})
    .pipe(operators_1.map(function (data) { return JSON.parse(data.xhr.responseText); }), operators_1.pluck('plain_text')); };
exports.product = function (req, res) {
    var id = req.params.id;
    if (id) {
        rxjs_1.forkJoin({
            item: ajax_1.ajax({
                url: "https://api.mercadolibre.com/items/" + id,
                method: 'GET',
                createXHR: helpers_1.createXHR
            }).pipe(operators_1.map(function (data) { return JSON.parse(data.xhr.responseText); }), operators_1.map(function (data) { return helpers_1.filterItem(data); })),
            description: httpLoginRequest(id)
        }).pipe(operators_1.map(function (_a) {
            var item = _a.item, description = _a.description;
            return ({
                author: constants_1.Constants.SIGNATURE,
                item: __assign(__assign({}, item), { description: description })
            });
        })).subscribe(function (data) {
            res.json(data);
        });
    }
    else {
        res.json({});
    }
};

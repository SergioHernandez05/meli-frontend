"use strict";
exports.__esModule = true;
exports.Server = void 0;
var express_1 = require("express");
var constants_1 = require("./constants");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var petitionController = require("./controllers/petition");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.app.use(body_parser_1["default"].json());
        this.app.use(body_parser_1["default"].urlencoded({ extended: true }));
        this.port = constants_1.Constants.PORT;
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use(cors_1["default"]());
    };
    Server.prototype.routes = function () {
        this.app.get('/api/items', petitionController.products);
        this.app.get('/api/items/:id', petitionController.product);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servidor corriendo en puerto', _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;

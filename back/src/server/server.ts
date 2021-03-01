
import express from "express";
import {Constants} from './constants';
import bodyParser from "body-parser";
import cors from 'cors';

import * as petitionController from "./controllers/petition";

export class Server {
    app: any;
    port: any;

    constructor() {
        this.app  = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        
        this.port = Constants.PORT;

    
        
        this.middlewares();
        this.routes();
    }
    middlewares() {

        this.app.use( cors() );
    }

    routes() {
        this.app.get('/api/items', petitionController.products)
        this.app.get('/api/items/:id', petitionController.product)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

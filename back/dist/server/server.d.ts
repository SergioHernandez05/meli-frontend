export declare class Server {
    app: any;
    port: any;
    constructor();
    middlewares(): void;
    routes(): void;
    listen(): void;
}

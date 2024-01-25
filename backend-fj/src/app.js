import express from 'express';
import Router from './router';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
    constructor(){
        this.server = express();
        this.middleware();
        this.routers();
    }

    middleware() {
        this.server.use(bodyParser.json());
        this.server.use(express.json());
        this.server.use(cors());
    }

    routers() {
        this.server.use(Router);
    }

}

export default new App().server;
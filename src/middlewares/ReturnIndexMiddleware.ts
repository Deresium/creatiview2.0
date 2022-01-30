import ApplicationMiddleware from "./ApplicationMiddleware";
import {RequestHandler} from "express";
import path from "path";

export default class ReturnIndexMiddleware extends ApplicationMiddleware {
    constructor() {
        super();
    }

    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            if(req.headers.accept?.includes('text/html')){
                const publicDirectoryPath = path.join(__dirname, '../../public/creativiewvue');
                res.sendFile(publicDirectoryPath + '/index.html');
            }else {
                next();
            }
        }
    }
}
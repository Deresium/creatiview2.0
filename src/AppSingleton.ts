import express from "express";
import path from "path";
import RedirectHttpsMiddleware from "./middlewares/RedirectHttpsMiddleware";
import ReturnIndexMiddleware from "./middlewares/ReturnIndexMiddleware";
import AllowLocalhostMiddleware from "./middlewares/AllowLocahostMiddleware";
import ContactRouter from "./routers/ContactRouter";
import ContactFacade from "./business/facades/ContactFacade";
import ContactDataMapper from "./database/datamappers/ContactDataMapper";
import DatabaseConnectionMapper from "./database/datamappers/DatabaseConnectionMapper";
import SendMailSESDataMapper from "./external/aws/mail/SendMailSESDataMapper";
import AlbumRouter from "./routers/AlbumRouter";
import AlbumFacade from "./business/facades/AlbumFacade";
import AlbumDataMapper from "./database/datamappers/AlbumDataMapper";
import PictureDataMapper from "./database/datamappers/PictureDataMapper";
import AwsFileDataMapper from "./external/aws/files/AwsFileDataMapper";
import AwsOperations from "./external/aws/files/AwsOperations";
import PublicFileRouter from "./routers/PublicFileRouter";

export default class AppSingleton{
    private static instance: AppSingleton;
    private readonly expressApp;

    private constructor() {
        this.expressApp = express();
        this.initApp();
    }

    public static getInstance(): AppSingleton {
        if (!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }

    public getExpressApp() {
        return this.expressApp;
    }

    private initApp(){
        const publicDirectoryPath = path.join(__dirname, '../public');
        this.expressApp.use(express.static(publicDirectoryPath));

        if(process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocalhostMiddleware().getRequestHandler());
        }

        this.expressApp.use(new ReturnIndexMiddleware().getRequestHandler());

        const albumFacade = new AlbumFacade(new AlbumDataMapper(), new PictureDataMapper(), new AwsFileDataMapper(new AwsOperations()));

        this.expressApp.use('/api', new PublicFileRouter(albumFacade).getRouter());

        this.expressApp.use(express.json());

        const databaseConnectionGateway = new DatabaseConnectionMapper();
        databaseConnectionGateway.testConnect();

        this.expressApp.use('/api', new ContactRouter(new ContactFacade(new ContactDataMapper(), new SendMailSESDataMapper())).getRouter());
        this.expressApp.use('/api', new AlbumRouter(albumFacade).getRouter());
    }
}
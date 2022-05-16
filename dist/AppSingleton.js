"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const RedirectHttpsMiddleware_1 = __importDefault(require("./middlewares/RedirectHttpsMiddleware"));
const ReturnIndexMiddleware_1 = __importDefault(require("./middlewares/ReturnIndexMiddleware"));
const AllowLocahostMiddleware_1 = __importDefault(require("./middlewares/AllowLocahostMiddleware"));
const ContactRouter_1 = __importDefault(require("./routers/ContactRouter"));
const ContactFacade_1 = __importDefault(require("./business/facades/ContactFacade"));
const ContactDataMapper_1 = __importDefault(require("./database/datamappers/ContactDataMapper"));
const DatabaseConnectionMapper_1 = __importDefault(require("./database/datamappers/DatabaseConnectionMapper"));
const SendMailSESDataMapper_1 = __importDefault(require("./external/aws/mail/SendMailSESDataMapper"));
const AlbumRouter_1 = __importDefault(require("./routers/AlbumRouter"));
const AlbumFacade_1 = __importDefault(require("./business/facades/AlbumFacade"));
const AlbumDataMapper_1 = __importDefault(require("./database/datamappers/AlbumDataMapper"));
const PictureDataMapper_1 = __importDefault(require("./database/datamappers/PictureDataMapper"));
const AwsFileDataMapper_1 = __importDefault(require("./external/aws/files/AwsFileDataMapper"));
const AwsOperations_1 = __importDefault(require("./external/aws/files/AwsOperations"));
const PublicFileRouter_1 = __importDefault(require("./routers/PublicFileRouter"));
class AppSingleton {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.initApp();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }
    getExpressApp() {
        return this.expressApp;
    }
    initApp() {
        if (process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware_1.default().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocahostMiddleware_1.default().getRequestHandler());
        }
        const publicDirectoryPath = path_1.default.join(__dirname, '../public');
        this.expressApp.use(express_1.default.static(publicDirectoryPath));
        this.expressApp.use(new ReturnIndexMiddleware_1.default().getRequestHandler());
        const albumFacade = new AlbumFacade_1.default(new AlbumDataMapper_1.default(), new PictureDataMapper_1.default(), new AwsFileDataMapper_1.default(new AwsOperations_1.default()));
        this.expressApp.use('/api', new PublicFileRouter_1.default(albumFacade).getRouter());
        this.expressApp.use(express_1.default.json());
        const databaseConnectionGateway = new DatabaseConnectionMapper_1.default();
        databaseConnectionGateway.testConnect();
        this.expressApp.use('/api', new ContactRouter_1.default(new ContactFacade_1.default(new ContactDataMapper_1.default(), new SendMailSESDataMapper_1.default())).getRouter());
        this.expressApp.use('/api', new AlbumRouter_1.default(albumFacade).getRouter());
    }
}
exports.default = AppSingleton;
//# sourceMappingURL=AppSingleton.js.map
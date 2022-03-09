import ApplicationRouter from "./ApplicationRouter";
import IAlbumRequester from "../business/requesters/IAlbumRequester";

export default class PublicFileRouter extends ApplicationRouter{
    private readonly albumRequester: IAlbumRequester;

    constructor(albumRequester: IAlbumRequester) {
        super();
        this.albumRequester = albumRequester;
    }

    initRoutes() {
        this.getRouter().get('/pictures/:pictureId', async(req, res) => {
            const pictureId = parseInt(req.params.pictureId);
            const image = await this.albumRequester.getPicture(pictureId);
            if(image){
                res.end(image, 'base64');
            }else{
                res.status(404).send();
            }
        });
    }

}
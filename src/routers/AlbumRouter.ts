import ApplicationRouter from "./ApplicationRouter";
import IAlbumRequester from "../business/requesters/IAlbumRequester";

export default class AlbumRouter extends ApplicationRouter{
    private readonly albumRequester: IAlbumRequester;

    constructor(albumRequester: IAlbumRequester) {
        super();
        this.albumRequester = albumRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/albums', async(req, res) => {
            res.send(await this.albumRequester.getListAlbums());
        });

        this.getRouter().get('/albums/:albumId', async(req, res) => {
            const albumId = parseInt(req.params.albumId);
            res.send(await this.albumRequester.getAlbumWithPictures(albumId));
        });
    }

}
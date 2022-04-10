import IAlbumRequester from "../requesters/IAlbumRequester";
import AlbumVM from "../viewmodels/AlbumVM";
import IAlbumDataGateway from "../../database/datagateways/IAlbumDataGateway";
import AlbumPicturesVM from "../viewmodels/AlbumPicturesVM";
import IPictureDataGateway from "../../database/datagateways/IPictureDataGateway";
import PictureVM from "../viewmodels/PictureVM";
import IFileDataGateway from "../../external/aws/files/IFileDataGateway";

export default class AlbumFacade implements IAlbumRequester{
    private readonly albumDataGateway: IAlbumDataGateway;
    private readonly pictureDataGateway: IPictureDataGateway;
    private readonly fileDataGateway: IFileDataGateway;

    constructor(albumDataGateway: IAlbumDataGateway, pictureDataGateway: IPictureDataGateway, fileDataGateway: IFileDataGateway) {
        this.albumDataGateway = albumDataGateway;
        this.pictureDataGateway = pictureDataGateway;
        this.fileDataGateway = fileDataGateway;
    }

    async getListAlbums(): Promise<Array<AlbumVM>> {
        const listAlbums = new Array<AlbumVM>();
        const albums = await this.albumDataGateway.getAllAlbums();
        for (const album of albums) {
            const firstPicture = await this.pictureDataGateway.getFirstPicture(album.getAlbumId());
            listAlbums.push(new AlbumVM(album.getAlbumId(), album.getName(), firstPicture.getPictureId()));
        }
        return listAlbums;
    }

    async getAlbumWithPictures(albumId: number): Promise<AlbumPicturesVM> {
        const album = await this.albumDataGateway.getAlbum(albumId);
        const pictures = await this.pictureDataGateway.getPictures(albumId);

        const albumVM = new AlbumVM(album.getAlbumId(), album.getName(), null);
        const albumPictureVM = new AlbumPicturesVM(albumVM);
        for(const picture of pictures){
            const aperture = `f/${picture.getAperture()}`;
            const focalLength = `${picture.getFocalLength()} mm`;
            const iso = `ISO ${picture.getIso()}`;
            const pictureVM = new PictureVM(picture.getPictureId(), aperture, picture.getSpeed(), picture.getCamera(), iso, focalLength);
            albumPictureVM.addPicture(pictureVM);
        }
        return albumPictureVM;
    }

    async getPicture(pictureId: number): Promise<any> {
        return await this.fileDataGateway.getPicture(pictureId);
    }
}

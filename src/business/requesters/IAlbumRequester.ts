import AlbumVM from "../models/AlbumVM";
import AlbumPicturesVM from "../models/AlbumPicturesVM";

export default interface IAlbumRequester{
    getListAlbums(): Promise<Array<AlbumVM>>;
    getAlbumWithPictures(albumId: number): Promise<AlbumPicturesVM>;
    getPicture(pictureId: number): Promise<any>;
}
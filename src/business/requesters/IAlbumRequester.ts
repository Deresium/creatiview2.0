import AlbumVM from "../viewmodels/AlbumVM";
import AlbumPicturesVM from "../viewmodels/AlbumPicturesVM";

export default interface IAlbumRequester{
    getListAlbums(): Promise<Array<AlbumVM>>;
    getAlbumWithPictures(albumId: number): Promise<AlbumPicturesVM>;
    getPicture(pictureId: number): Promise<any>;
}
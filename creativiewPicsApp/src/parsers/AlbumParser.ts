import AlbumVM from "../models/AlbumVM";
import AlbumPicturesVM from "../models/AlbumPicturesVM";
import PictureVM from "../models/PictureVM";

export default class AlbumParser{
    public static parseAlbums(albumsData: any): Array<AlbumVM> {
        const albums = new Array<AlbumVM>();
        for(const album of albumsData){
            albums.push(AlbumParser.parseAlbum(album));
        }
        return albums;
    }

    private static parseAlbum(albumData: any): AlbumVM {
        return new AlbumVM(albumData.albumId, albumData.albumName, albumData.presentationPictureId);
    }

    public static parseAlbumPicture(albumPicturesData: any): AlbumPicturesVM {
        const album = AlbumParser.parseAlbum(albumPicturesData.album);
        const albumPicture = new AlbumPicturesVM(album);
        for(const picture of albumPicturesData.pictures){
            const pictureVM = AlbumParser.parsePicture(picture);
            albumPicture.addPicture(pictureVM);
        }
        return albumPicture;
    }

    private static parsePicture(pictureData: any): PictureVM {
        return new PictureVM(pictureData.pictureId, pictureData.aperture, pictureData.speed, pictureData.camera, pictureData.iso, pictureData.focalLength);
    }
}
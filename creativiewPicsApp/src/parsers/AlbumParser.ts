import AlbumVM from "../models/AlbumVM";

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
}
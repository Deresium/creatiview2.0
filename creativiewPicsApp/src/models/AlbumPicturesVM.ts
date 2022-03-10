import AlbumVM from "./AlbumVM";
import PictureVM from "./PictureVM";

export default class AlbumPicturesVM {
    private readonly album: AlbumVM;
    private readonly pictures: Array<PictureVM>;

    constructor(album: AlbumVM) {
        this.album = album;
        this.pictures = new Array<PictureVM>();
    }

    public addPicture(picture: PictureVM){
        this.pictures.push(picture);
    }

    public getAlbumName(){
        return this.album.getName();
    }

    public getPictures(){
        return this.pictures;
    }
}
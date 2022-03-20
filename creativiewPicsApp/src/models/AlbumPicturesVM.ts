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

    public getNextPictureId(pictureId: number): number{
        for(let i = 0; i <= this.pictures.length; ++i){
            const picture = this.pictures[i];
            if(picture.getPictureId() === pictureId){
                const nextIndex = i + 1;
                if(nextIndex > this.pictures.length){
                    return 0;
                }
                return this.pictures[nextIndex].getPictureId();
            }
        }
        return -1
    }

    public getPreviousPictureId(pictureId: number){
        for(let i = 0; i <= this.pictures.length; ++i){
            const picture = this.pictures[i];
            if(picture.getPictureId() === pictureId){
                const previousIndex = i - 1;
                if(previousIndex < 0){
                    return 0;
                }
                return this.pictures[previousIndex].getPictureId();
            }
        }
        return -1
    }
}
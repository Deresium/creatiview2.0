export default class AlbumVM {
    private readonly albumId: number;
    private readonly albumName: string;
    private readonly presentationPictureId: number;

    constructor(albumId: number, albumName: string, presentationPictureId: number) {
        this.albumId = albumId;
        this.albumName = albumName;
        this.presentationPictureId = presentationPictureId;
    }

    getId(){
        return this.albumId;
    }

    getName(){
        return this.albumName;
    }

    getPresentationPictureId(){
        return this.presentationPictureId;
    }
}
import PictureEntity from "../entities/PictureEntity";

export default interface IPictureDataGateway{
    getPictures(albumId: number): Promise<Array<PictureEntity>>;
    getFirstPicture(albumId: number): Promise<PictureEntity>;
}
import AlbumEntity from "../entities/AlbumEntity";

export default interface IAlbumDataGateway{
    getAllAlbums(): Promise<Array<AlbumEntity>>;
    getAlbum(albumId: number): Promise<AlbumEntity>;
}
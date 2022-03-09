import IAlbumDataGateway from "../datagateways/IAlbumDataGateway";
import AlbumEntity from "../entities/AlbumEntity";

export default class AlbumDataMapper implements IAlbumDataGateway {
    async getAllAlbums(): Promise<Array<AlbumEntity>> {
        return await AlbumEntity.findAll({
            order: [['order', 'ASC']]
        });
    }

    async getAlbum(albumId: number): Promise<AlbumEntity> {
        return await AlbumEntity.findByPk(albumId);
    }
}
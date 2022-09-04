import IAlbumDataGateway from "../datagateways/IAlbumDataGateway";
import AlbumEntity from "../entities/AlbumEntity";

export default class AlbumDataMapper implements IAlbumDataGateway {
    async getAllAlbums(): Promise<Array<AlbumEntity>> {
        try {
            return await AlbumEntity.findAll({
                order: [['order', 'ASC']]
            });
        }catch(error){
            console.error(error);
        }
    }

    async getAlbum(albumId: number): Promise<AlbumEntity> {
        return await AlbumEntity.findByPk(albumId);
    }
}
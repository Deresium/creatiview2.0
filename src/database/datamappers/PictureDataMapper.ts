import IPictureDataGateway from "../datagateways/IPictureDataGateway";
import PictureEntity from "../entities/PictureEntity";

export default class PictureDataMapper implements IPictureDataGateway{
    async getPictures(albumId: number): Promise<Array<PictureEntity>> {
        return await PictureEntity.findAll({
            where:{
                albumId
            },
            order: [['order', 'ASC']]
        });
    }

    async getFirstPicture(albumId: number): Promise<PictureEntity> {
        return await PictureEntity.findOne({
           where:{
               albumId
           },
            order: [['order', 'ASC']]
        });
    }
}
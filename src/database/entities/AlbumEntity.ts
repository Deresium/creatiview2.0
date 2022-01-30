import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class AlbumEntity extends Model{
    private albumId: number;
    private name: string;

    getAlbumId(){
        return this.albumId;
    }

    getName(){
        return this.name;
    }
}

AlbumEntity.init({
    albumId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
},{
    tableName: 'Albums',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
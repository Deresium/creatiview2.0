import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class PictureEntity extends Model {
    private pictureId: number;
    private albumId: number;
    private aperture: string;
    private speed: string;
    private camera: string;
    private iso: string;
    private focalLength: string;

    getPictureId() {
        return this.pictureId;
    }

    getAlbumId() {
        return this.albumId;
    }

    getAperture() {
        return this.aperture;
    }

    getSpeed() {
        return this.speed;
    }

    getCamera() {
        return this.camera;
    }

    getIso() {
        return this.iso;
    }

    getFocalLength() {
        return this.focalLength;
    }
}

PictureEntity.init({
    pictureId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    aperture: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    speed: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    camera: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    iso: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    focalLength: {
        type: DataTypes.STRING(16),
        allowNull: true
    }
}, {
    tableName: 'Pictures',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});

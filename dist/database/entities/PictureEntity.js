"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class PictureEntity extends sequelize_1.Model {
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
exports.default = PictureEntity;
PictureEntity.init({
    pictureId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    albumId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    aperture: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    speed: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    camera: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: true
    },
    iso: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    focalLength: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Pictures',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=PictureEntity.js.map
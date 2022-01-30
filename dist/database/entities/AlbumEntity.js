"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class AlbumEntity extends sequelize_1.Model {
    getAlbumId() {
        return this.albumId;
    }
    getName() {
        return this.name;
    }
}
exports.default = AlbumEntity;
AlbumEntity.init({
    albumId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: false
    }
}, {
    tableName: 'Albums',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=AlbumEntity.js.map
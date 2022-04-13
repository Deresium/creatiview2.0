"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class AddressEntity extends sequelize_1.Model {
}
exports.default = AddressEntity;
AddressEntity.init({
    addressId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    number: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    town: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    zipCode: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    additionalInfo: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    customerProviderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Addresses',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=AddressEntity.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class InvoiceEntity extends sequelize_1.Model {
}
exports.default = InvoiceEntity;
InvoiceEntity.init({
    invoiceId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    bankFile: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    invoiceFile: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    year: {
        type: sequelize_1.DataTypes.STRING(8),
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    limitDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    customerProviderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    userAccountId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    customerProviderAccountId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    userAddressId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    customerProviderAddressId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'Invoices',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=InvoiceEntity.js.map
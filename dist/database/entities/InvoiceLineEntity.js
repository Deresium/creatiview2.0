"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class InvoiceLineEntity extends sequelize_1.Model {
}
exports.default = InvoiceLineEntity;
InvoiceLineEntity.init({
    invoiceLineId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    vat: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    },
    deductible: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    },
    invoiceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'InvoiceLines',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=InvoiceLineEntity.js.map
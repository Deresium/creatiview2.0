"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class AccountEntity extends sequelize_1.Model {
    getAccountId() {
        return this.accountId;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
exports.default = AccountEntity;
AccountEntity.init({
    accountId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    bic: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: true
    },
    customerProviderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'Accounts',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=AccountEntity.js.map
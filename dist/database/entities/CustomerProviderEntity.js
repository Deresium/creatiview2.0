"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class CustomerProviderEntity extends sequelize_1.Model {
    getCustomerProviderId() {
        return this.customerProviderId;
    }
    getName() {
        return this.name;
    }
}
exports.default = CustomerProviderEntity;
CustomerProviderEntity.init({
    customerProviderId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    isCustomer: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    vatNumber: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: true
    }
}, {
    tableName: 'CustomerProviders',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=CustomerProviderEntity.js.map
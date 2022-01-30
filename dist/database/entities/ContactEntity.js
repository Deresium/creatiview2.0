"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class ContactEntity extends sequelize_1.Model {
    getContactId() {
        return this.contactId;
    }
    getName() {
        return this.name;
    }
    getFirstName() {
        return this.firstName;
    }
    getEmail() {
        return this.email;
    }
    getMessage() {
        return this.message;
    }
}
exports.default = ContactEntity;
ContactEntity.init({
    contactId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: false
    },
    message: {
        type: sequelize_1.DataTypes.STRING(4000),
        allowNull: false
    }
}, {
    tableName: 'Contacts',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=ContactEntity.js.map
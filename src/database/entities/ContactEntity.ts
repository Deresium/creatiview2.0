import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class ContactEntity extends Model{
    private contactId: number;
    private name: string;
    private firstName: string;
    private email: string;
    private message: string;

    getContactId(){
        return this.contactId;
    }

    getName() {
        return this.name;
    }

    getFirstName(){
        return this.firstName;
    }

    getEmail(){
        return this.email;
    }

    getMessage(){
        return this.message;
    }
}

ContactEntity.init({
    contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    message: {
        type: DataTypes.STRING(4000),
        allowNull: false
    }
}, {
    tableName: 'Contacts',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
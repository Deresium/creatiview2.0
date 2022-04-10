import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class UserEntity extends Model {
    private userId: number;
    private email: string;
    private googleId: string;
    private name: string;
    private vatNumber: string;
    private phone: string;
    private role: string;

    getUserId(){
        return this.userId;
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return this.role;
    }
}

UserEntity.init({
    userId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    googleId: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(512),
        allowNull: true
    },
    vatNumber: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    role: {
        type: DataTypes.STRING(16),
        allowNull: true
    }
},{
    tableName: 'Users',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class AddressEntity extends Model{
    private addressId: number;
    private street: string;
    private number: string;
    private town: string;
    private zipCode: string;
    private additionalInfo: string;
    private userId: number;
    private customerProviderId: number;
}

AddressEntity.init({
    addressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    number: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    town: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    zipCode: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    additionalInfo: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    customerProviderId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    tableName: 'Addresses',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});

import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class CustomerProviderEntity extends Model {
    private customerProviderId: number;
    private name: string;
    private email: string;
    private phone: string;
    private isCustomer: boolean;
    private vatNumber: string;

    getCustomerProviderId(){
        return this.customerProviderId;
    }

    getName(){
        return this.name;
    }
}


CustomerProviderEntity.init({
    customerProviderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(1024),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    isCustomer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    vatNumber: {
        type: DataTypes.STRING(128),
        allowNull: true
    }
},{
    tableName: 'CustomerProviders',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
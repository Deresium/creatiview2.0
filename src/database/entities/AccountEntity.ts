import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class AccountEntity extends Model{
    private accountId: number;
    private accountNumber: string;
    private bic: string;
    private customerProviderId: number;
    private userId: number;

    getAccountId(){
        return this.accountId;
    }

    getAccountNumber(){
        return this.accountNumber;
    }
}

AccountEntity.init({
    accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accountNumber: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    bic: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    customerProviderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},{
    tableName: 'Accounts',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
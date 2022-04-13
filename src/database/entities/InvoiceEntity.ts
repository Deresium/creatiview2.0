import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class InvoiceEntity extends Model{
    private invoiceId: number;
    private number: number;
    private bankFile: string;
    private invoiceFile: string;
    private year: string;
    private date: Date;
    private limitDate: Date;
    private userId: number;
    private userAccountId: number;
    private userAddressId: number;
    private customerProviderId: number;
    private customerProviderAccountId: number;
    private customerProviderAddressId: number;
}

InvoiceEntity.init({
    invoiceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bankFile: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    invoiceFile: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    year: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    limitDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customerProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userAccountId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    customerProviderAccountId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    userAddressId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    customerProviderAddressId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},{
    tableName: 'Invoices',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});
import {DataTypes, Model} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class InvoiceLineEntity extends Model {
    private invoiceLineId: number;
    private amount: number;
    private vat: number;
    private deductible: number;
    private invoiceId: number;
}

InvoiceLineEntity.init({
    invoiceLineId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    vat: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    deductible: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    invoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName: 'InvoiceLines',
    sequelize: DatabaseSingleton.getInstance().getSequelize()

});
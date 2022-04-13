import ICustomerProviderDataGateway from "../datagateways/ICustomerProviderDataGateway";
import CustomerProviderEntity from "../entities/CustomerProviderEntity";

export default class CustomerProviderDataMapper implements ICustomerProviderDataGateway {
    async getCustomersOrProviders(isCustomer: boolean): Promise<Array<CustomerProviderEntity>> {
        return await CustomerProviderEntity.findAll({
            where: {
                isCustomer
            }
        })
    }

}
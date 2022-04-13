import CustomerProviderEntity from "../entities/CustomerProviderEntity";

export default interface ICustomerProviderDataGateway{
    getCustomersOrProviders(isCustomer: boolean): Promise<Array<CustomerProviderEntity>>;
}
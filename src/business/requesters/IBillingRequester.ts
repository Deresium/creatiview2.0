import KeyValue from "../viewmodels/KeyValue";

export default interface IBillingRequester{
    getAllUsers(): Promise<Array<KeyValue<string, string>>>;
    getAccountsForUsers(userId: number): Promise<Array<KeyValue<string, string>>>;
    getAccountsForCustomerProvider(customerProviderId: number): Promise<Array<KeyValue<string, string>>>;
    getCustomerOrProviders(isCustomer: boolean): Promise<Array<KeyValue<string, string>>>;
}
import AccountEntity from "../entities/AccountEntity";

export default interface IAccountDataGateway {
    getAccountsForUser(userId: number): Promise<Array<AccountEntity>>;
    getAccountsForCustomerProvider(customerProviderId: number): Promise<Array<AccountEntity>>
}
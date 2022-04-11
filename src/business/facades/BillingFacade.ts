import IBillingRequester from "../requesters/IBillingRequester";
import KeyValue from "../viewmodels/KeyValue";
import IUserDataGateway from "../../database/datagateways/IUserDataGateway";
import IAccountDataGateway from "../../database/datagateways/IAccountDataGateway";
import AccountEntity from "../../database/entities/AccountEntity";
import ICustomerProviderDataGateway from "../../database/datagateways/ICustomerProviderDataGateway";

export default class BillingFacade implements IBillingRequester{
    private readonly userDataGateway:  IUserDataGateway;
    private readonly accountDataGateway: IAccountDataGateway;
    private readonly customerProviderDataGateway: ICustomerProviderDataGateway;

    constructor(userDataGateway:  IUserDataGateway, accountDataGateway: IAccountDataGateway, customerProviderDataGateway: ICustomerProviderDataGateway) {
        this.userDataGateway = userDataGateway;
        this.accountDataGateway = accountDataGateway;
        this.customerProviderDataGateway = customerProviderDataGateway;
    }

    async getAllUsers(): Promise<Array<KeyValue<string, string>>> {
        const users = await this.userDataGateway.getAllUsers();
        const keyValues = new Array<KeyValue<string, string>>();
        for(const user of users){
            keyValues.push(new KeyValue(user.getUserId().toString(), user.getName()));
        }
        return keyValues;
    }

    async getAccountsForCustomerProvider(customerProviderId: number): Promise<Array<KeyValue<string, string>>> {
        const accounts = await this.accountDataGateway.getAccountsForCustomerProvider(customerProviderId);
        return BillingFacade.accountsToKeyValue(accounts);
    }

    async getAccountsForUsers(userId: number): Promise<Array<KeyValue<string, string>>> {
        const accounts = await this.accountDataGateway.getAccountsForUser(userId);
        return BillingFacade.accountsToKeyValue(accounts);
    }

    async getCustomerOrProviders(isCustomer: boolean): Promise<Array<KeyValue<string, string>>> {
        const customerProviders = await this.customerProviderDataGateway.getCustomersOrProviders(isCustomer);
        const keyValues = new Array<KeyValue<string, string>>();
        for(const customerProvider of customerProviders){
            keyValues.push(new KeyValue(customerProvider.getCustomerProviderId().toString(), customerProvider.getName()));
        }
        return keyValues;
    }

    private static accountsToKeyValue(accounts: Array<AccountEntity>): Array<KeyValue<string, string>> {
        const keyValues = new Array<KeyValue<string, string>>();
        for(const account of accounts){
            keyValues.push(new KeyValue(account.getAccountId().toString(), account.getAccountNumber()));
        }
        return keyValues;
    }




}
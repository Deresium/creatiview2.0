import IAccountDataGateway from "../datagateways/IAccountDataGateway";
import AccountEntity from "../entities/AccountEntity";

export default class AccountDataMapper implements IAccountDataGateway {
    async getAccountsForUser(userId: number): Promise<Array<AccountEntity>> {
        return await AccountEntity.findAll({
            where: {
                userId
            }
        });
    }

    async getAccountsForCustomerProvider(customerProviderId: number): Promise<Array<AccountEntity>> {
        return await AccountEntity.findAll({
            where: {
                customerProviderId
            }
        });
    }

}
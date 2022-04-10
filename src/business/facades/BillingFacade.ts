import IBillingRequester from "../requesters/IBillingRequester";
import KeyValue from "../viewmodels/KeyValue";
import IUserDataGateway from "../../database/datagateways/IUserDataGateway";

export default class BillingFacade implements IBillingRequester{
    private readonly userDataGateway:  IUserDataGateway;

    constructor(userDataGateway:  IUserDataGateway) {
        this.userDataGateway = userDataGateway;
    }

    async getAllUsers(): Promise<Array<KeyValue<string, string>>> {
        const users = await this.userDataGateway.getAllUsers();
        const keyValues = new Array<KeyValue<string, string>>();
        for(const user of users){
            keyValues.push(new KeyValue(user.getUserId().toString(), user.getName()));
        }
        return keyValues;
    }

}
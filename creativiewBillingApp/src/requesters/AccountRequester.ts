import axiosCreatiview from "../axios/axiosCreatiview";
import KeyValueParser from "../parsers/KeyValueParser";

export default class AccountRequester {
    public static async requestUserAccounts(userId: number){
        const response = await axiosCreatiview.get(`/user/${userId}/accounts`);
        return KeyValueParser.parseKeyValues(response.data);
    }

    public static async requestCustomerProviderAccounts(customerProviderId: number) {
        const response = await axiosCreatiview.get(`/customerProvider/${customerProviderId}/accounts`);
        return KeyValueParser.parseKeyValues(response.data);
    }
}
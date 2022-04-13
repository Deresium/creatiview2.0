import KeyValue from "../models/KeyValue";
import axiosCreatiview from "../axios/axiosCreatiview";
import KeyValueParser from "../parsers/KeyValueParser";

export default class CustomerProviderRequester {
    public static async requestCustomerOrProviders(isCustomer: boolean): Promise<Array<KeyValue<string, string>>>{
        const response = await axiosCreatiview.get('customerProviders',{
            params:{
                isCustomer
            }
        });
        return KeyValueParser.parseKeyValues(response.data);
    }
}
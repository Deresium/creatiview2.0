import axiosCreatiview from "../axios/axiosCreatiview";
import KeyValueParser from "../parsers/KeyValueParser";
import KeyValue from "../models/KeyValue";

export default class UsersRequester{
    public static async requestAllUsers(): Promise<Array<KeyValue<string, string>>>{
        const response = await axiosCreatiview.get('/users');
        return KeyValueParser.parseKeyValues(response.data);
    }
}
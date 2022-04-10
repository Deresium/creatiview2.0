import KeyValue from "../models/KeyValue";

export default class KeyValueParser {
    public static parseKeyValues(data: any): Array<KeyValue<string, string>>{
        const keyValues = new Array<KeyValue<string, string>>();
        for(const keyValue of data){
            keyValues.push(this.parseKeyValue(keyValue));
        }
        return keyValues;
    }

    private static parseKeyValue(data: any): KeyValue<string, string>{
        return new KeyValue(data.key, data.value);
    }
}
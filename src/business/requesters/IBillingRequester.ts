import KeyValue from "../viewmodels/KeyValue";

export default interface IBillingRequester{
    getAllUsers(): Promise<Array<KeyValue<string, string>>>;
}
export default class KeyValue<T, U> {
    private readonly key: T;
    private readonly value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }
}
export default class LoginRequesterDS {
    private readonly idToken: string;
    private readonly name: string;
    private readonly email: string;
    private readonly password: string;
    private readonly customerId: number;

    constructor(idToken: string, name: string, email: string, password: string, customerId: number) {
        this.idToken = idToken;
        this.name = name;
        this.email = email;
        this.password = password;
        this.customerId = customerId;
    }

    getIdToken(){
        return this.idToken
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getCustomerId(){
        return this.customerId;
    }
}
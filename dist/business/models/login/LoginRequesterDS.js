"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRequesterDS {
    constructor(idToken, name, email, password, customerId) {
        this.idToken = idToken;
        this.name = name;
        this.email = email;
        this.password = password;
        this.customerId = customerId;
    }
    getIdToken() {
        return this.idToken;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getCustomerId() {
        return this.customerId;
    }
}
exports.default = LoginRequesterDS;
//# sourceMappingURL=LoginRequesterDS.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(name, firstName, email, message) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.message = message;
    }
    getName() {
        return this.name;
    }
    getFirstName() {
        return this.firstName;
    }
    getEmail() {
        return this.email;
    }
    getMessage() {
        return this.message;
    }
}
exports.default = Contact;
//# sourceMappingURL=Contact.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
const Contact_1 = __importDefault(require("../business/viewmodels/Contact"));
class ContactRouter extends ApplicationRouter_1.default {
    constructor(contactRequester) {
        super();
        this.contactRequester = contactRequester;
    }
    initRoutes() {
        this.getRouter().post('/contact', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const firstName = req.body.firstName;
            const email = req.body.email;
            const message = req.body.message;
            if (!name || !email || !message) {
                res.status(400).send();
                return;
            }
            const contact = new Contact_1.default(name, firstName, email, message);
            try {
                yield this.contactRequester.addContact(contact);
                res.send();
            }
            catch (exception) {
                console.log(exception);
                res.status(500).send();
            }
        }));
    }
}
exports.default = ContactRouter;
//# sourceMappingURL=ContactRouter.js.map
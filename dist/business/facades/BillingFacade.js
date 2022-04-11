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
const KeyValue_1 = __importDefault(require("../viewmodels/KeyValue"));
class BillingFacade {
    constructor(userDataGateway, accountDataGateway, customerProviderDataGateway) {
        this.userDataGateway = userDataGateway;
        this.accountDataGateway = accountDataGateway;
        this.customerProviderDataGateway = customerProviderDataGateway;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userDataGateway.getAllUsers();
            const keyValues = new Array();
            for (const user of users) {
                keyValues.push(new KeyValue_1.default(user.getUserId().toString(), user.getName()));
            }
            return keyValues;
        });
    }
    getAccountsForCustomerProvider(customerProviderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.accountDataGateway.getAccountsForCustomerProvider(customerProviderId);
            return BillingFacade.accountsToKeyValue(accounts);
        });
    }
    getAccountsForUsers(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.accountDataGateway.getAccountsForUser(userId);
            return BillingFacade.accountsToKeyValue(accounts);
        });
    }
    getCustomerOrProviders(isCustomer) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerProviders = yield this.customerProviderDataGateway.getCustomersOrProviders(isCustomer);
            const keyValues = new Array();
            for (const customerProvider of customerProviders) {
                keyValues.push(new KeyValue_1.default(customerProvider.getCustomerProviderId().toString(), customerProvider.getName()));
            }
            return keyValues;
        });
    }
    static accountsToKeyValue(accounts) {
        const keyValues = new Array();
        for (const account of accounts) {
            keyValues.push(new KeyValue_1.default(account.getAccountId().toString(), account.getAccountNumber()));
        }
        return keyValues;
    }
}
exports.default = BillingFacade;
//# sourceMappingURL=BillingFacade.js.map
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
const OnlyAdminMiddleware_1 = __importDefault(require("../middlewares/OnlyAdminMiddleware"));
class BillingRouter extends ApplicationRouter_1.default {
    constructor(billingRequester) {
        super();
        this.billingRequester = billingRequester;
    }
    initRoutes() {
        this.getRouter().get('/users', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).send(yield this.billingRequester.getAllUsers());
        }));
        this.getRouter().get('/customerProviders', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const isCustomer = req.query.isCustomer;
            res.status(200).send(yield this.billingRequester.getCustomerOrProviders(isCustomer));
        }));
        this.getRouter().get('/user/:userId/accounts', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            if (!userId) {
                res.status(400).send();
                return;
            }
            res.status(200).send(yield this.billingRequester.getAccountsForUsers(userId));
        }));
        this.getRouter().get('/customerProvider/:customerProviderId/accounts', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const customerProviderId = req.params.customerProviderId;
            if (!customerProviderId) {
                res.status(400).send();
                return;
            }
            res.status(200).send(yield this.billingRequester.getAccountsForCustomerProvider(customerProviderId));
        }));
    }
}
exports.default = BillingRouter;
//# sourceMappingURL=BillingRouter.js.map
import ApplicationRouter from "./ApplicationRouter";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import IBillingRequester from "../business/requesters/IBillingRequester";

export default class BillingRouter extends ApplicationRouter{
    private readonly billingRequester: IBillingRequester;

    constructor(billingRequester: IBillingRequester) {
        super();
        this.billingRequester = billingRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/users', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            res.status(200).send(await this.billingRequester.getAllUsers());
        });

        this.getRouter().get('/customerProviders', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const isCustomer: boolean = req.query.isCustomer;
            res.status(200).send(await this.billingRequester.getCustomerOrProviders(isCustomer));
        });

        this.getRouter().get('/user/:userId/accounts', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const userId: number = req.params.userId;
            if(!userId){
                res.status(400).send();
                return;
            }
            res.status(200).send(await this.billingRequester.getAccountsForUsers(userId));
        });

        this.getRouter().get('/customerProvider/:customerProviderId/accounts', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const customerProviderId: number = req.params.customerProviderId;
            if(!customerProviderId){
                res.status(400).send();
                return;
            }
            res.status(200).send(await this.billingRequester.getAccountsForCustomerProvider(customerProviderId));
        });
    }

}
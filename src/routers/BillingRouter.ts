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
    }

}
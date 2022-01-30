import ApplicationRouter from "./ApplicationRouter";
import Contact from "../business/models/Contact";
import IContactRequester from "../business/requesters/IContactRequester";

export default class ContactRouter extends ApplicationRouter{
    private readonly contactRequester: IContactRequester;

    constructor(contactRequester: IContactRequester) {
        super();
        this.contactRequester = contactRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/api/contact', async(req, res) => {
            const name = req.body.name;
            const firstName = req.body.firstName;
            const email = req.body.email;
            const message = req.body.message;

            if(!name || !email || !message){
                res.status(400).send();
                return;
            }

            const contact = new Contact(name, firstName, email, message);
            try {
                await this.contactRequester.addContact(contact);
                res.send();
            }catch(exception){
                console.log(exception);
                res.status(500).send();
            }
        });
    }

}
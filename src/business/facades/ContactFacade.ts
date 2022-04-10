import IContactRequester from "../requesters/IContactRequester";
import Contact from "../viewmodels/Contact";
import IContactDataGateway from "../../database/datagateways/IContactDataGateway";
import ISendMailDataGateway from "../../external/aws/mail/ISendMailDataGateway";

export default class ContactFacade implements IContactRequester{
    private readonly contactDataGateway: IContactDataGateway;
    private readonly sendMailDataGateway: ISendMailDataGateway;

    constructor(contactDataGateway: IContactDataGateway, sendMailDataGateway: ISendMailDataGateway) {
        this.contactDataGateway = contactDataGateway;
        this.sendMailDataGateway = sendMailDataGateway;
    }

    async addContact(contact: Contact) {
        await this.sendMailDataGateway.sendEmailContact(contact);
        await this.contactDataGateway.createContact(contact);
    }

}
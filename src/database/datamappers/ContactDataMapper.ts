import IContactDataGateway from "../datagateways/IContactDataGateway";
import Contact from "../../business/viewmodels/Contact";
import ContactEntity from "../entities/ContactEntity";

export default class ContactDataMapper implements IContactDataGateway {
    async createContact(contact: Contact) {
        await ContactEntity.create({
            name: contact.getName(),
            firstName: contact.getFirstName(),
            email: contact.getEmail(),
            message: contact.getMessage()
        });
    }

}
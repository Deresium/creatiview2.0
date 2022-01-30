import Contact from "../../business/models/Contact";

export default interface IContactDataGateway{
    createContact(contact: Contact): Promise<void>;
}
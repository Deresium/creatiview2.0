import Contact from "../../business/viewmodels/Contact";

export default interface IContactDataGateway{
    createContact(contact: Contact): Promise<void>;
}
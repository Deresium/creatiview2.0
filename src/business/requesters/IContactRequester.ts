import Contact from "../models/Contact";

export default interface IContactRequester{
    addContact(contact: Contact): Promise<void>;
}
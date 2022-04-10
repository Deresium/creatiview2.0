import Contact from "../viewmodels/Contact";

export default interface IContactRequester{
    addContact(contact: Contact): Promise<void>;
}
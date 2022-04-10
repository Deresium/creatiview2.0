import Contact from "../../../business/viewmodels/Contact";

export default interface ISendMailDataGateway {
    sendEmailContact(contact: Contact): Promise<void>;
}
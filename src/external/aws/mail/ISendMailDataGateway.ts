import Contact from "../../../business/models/Contact";

export default interface ISendMailDataGateway {
    sendEmailContact(contact: Contact): Promise<void>;
}
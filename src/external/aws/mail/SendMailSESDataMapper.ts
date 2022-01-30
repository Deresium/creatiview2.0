import ISendMailDataGateway from "./ISendMailDataGateway";
import Contact from "../../../business/models/Contact";
import {SendEmailCommand} from "@aws-sdk/client-ses";
import AwsCredentialsSingleton from "../AwsCredentialsSingleton";

export default class SendMailSESDataMapper implements ISendMailDataGateway {
    async sendEmailContact(contact: Contact): Promise<void> {
        const client = AwsCredentialsSingleton.getInstance().getSESClient();
        const command = new SendEmailCommand({
            Message: {
                Subject: {
                    Data: `Nouveau message de ${contact.getFirstName()} ${contact.getName()}`,
                },
                Body: {
                    Html: {
                        Data: this.getText(true, contact)
                    },
                    Text: {
                        Data: this.getText(false, contact)
                    }
                }
            },
            Destination: {
                ToAddresses: ['dimitri.steinbusch@creatiview.be']
            },
            Source: 'info@creatiview.be'
        });

        try{
            await client.send(command);
            console.log('email sent to dimitri.steinbusch@creatiview.be');
        }catch(exception){
            console.error(exception);
        }
    }

    private getText(html: boolean, contact: Contact) {
        let separator = '\n';
        if (html) {
            separator = '<br/>'
        }

        return `
        Nouveau message de ${contact.getFirstName()} ${contact.getName()} (email: ${contact.getEmail()}): ${separator}
        ${contact.getMessage()}
        `
    }


}
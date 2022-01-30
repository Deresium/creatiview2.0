"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_ses_1 = require("@aws-sdk/client-ses");
const AwsCredentialsSingleton_1 = __importDefault(require("../AwsCredentialsSingleton"));
class SendMailDataMapper {
    sendEmailContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = AwsCredentialsSingleton_1.default.getInstance().getSESClient();
            const command = new client_ses_1.SendEmailCommand({
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
            try {
                yield client.send(command);
            }
            catch (exception) {
                console.error(exception);
            }
        });
    }
    getText(html, contact) {
        let separator = '\n';
        if (html) {
            separator = '<br/>';
        }
        return `
        Nouveau message de ${contact.getFirstName()} ${contact.getName()} (email: ${contact.getEmail()}): ${separator}
        ${contact.getMessage()}
        `;
    }
}
exports.default = SendMailDataMapper;
//# sourceMappingURL=SendMailDataMapper.js.map
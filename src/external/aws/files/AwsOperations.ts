import IAwsOperations from "./IAwsOperations";
import AwsCredentialsSingleton from "../AwsCredentialsSingleton";
import {GetObjectCommand} from "@aws-sdk/client-s3";
import {Readable} from "stream";

export default class AwsOperations implements IAwsOperations{
    public async getFile(fileName: string) {
        const client = AwsCredentialsSingleton.getInstance().getS3Client();
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileName
        });
        try {
            const response = await client.send(command);
            if(!(response.Body instanceof Readable)){
                console.log('Not good class');
                return null;
            }
            return await this.streamToString(response.Body as Readable);
        }catch(error){
            console.log(error);
        }
        return null;
    }

    private async streamToString(stream: Readable): Promise<string>{
        return await new Promise((resolve, reject) => {
            const chunks: Uint8Array[] = [];
            stream.on('data', (chunk) => chunks.push(chunk));
            stream.on('error', reject);
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
        });
    }
}
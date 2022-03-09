import IFileDataGateway from "./IFileDataGateway";
import IAwsOperations from "./IAwsOperations";

export default class AwsFileDataMapper implements IFileDataGateway{
    private awsOperations: IAwsOperations;

    constructor(awsOperations: IAwsOperations) {
        this.awsOperations = awsOperations;
    }

    async getPicture(pictureId: number) {
        return await this.awsOperations.getFile(`pictures/${pictureId}.jpg`);
    }
}
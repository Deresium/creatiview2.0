import UserEntity from "../entities/UserEntity";
import IUserDataGateway from "../datagateways/IUserDataGateway";

export default class UserDataMapper implements IUserDataGateway{
    async createGoogleUser(name: string, email: string, googleId: string): Promise<UserEntity> {
        try {
            return await UserEntity.create({
                name,
                email,
                googleId,
                role: 'USER'
            });
        }catch(e: any){
            console.error(e);
            throw e;
        }
    }

    async getUserByGoogleId(googleId: string): Promise<UserEntity> {
        return await UserEntity.findOne({
            where:{
                googleId
            }
        });
    }

    async getAllUsers(): Promise<Array<UserEntity>> {
        return await UserEntity.findAll();
    }
}
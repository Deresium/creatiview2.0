import ILoginRequester from "../requesters/ILoginRequester";
import LoginRequesterDS from "../models/login/LoginRequesterDS";
import UserVM from "../viewmodels/UserVM";
import UserEntity from "../../database/entities/UserEntity";
import GoogleLoginStrategy from "../models/login/GoogleLoginStrategy";
import IUserDataGateway from "../../database/datagateways/IUserDataGateway";

export default class LoginFacade implements ILoginRequester {
    private userDataGateway: IUserDataGateway;

    constructor(userDataGateway: IUserDataGateway) {
        this.userDataGateway = userDataGateway;
    }

    async login(loginRequesterDS: LoginRequesterDS): Promise<UserVM> {
        let userEntity: UserEntity;
        if (loginRequesterDS.getIdToken()) {
            userEntity = await new GoogleLoginStrategy(loginRequesterDS, this.userDataGateway).login();
        }
        if (!userEntity) {
            return null;
        }
        return new UserVM(userEntity.getUserId(), userEntity.getEmail(), userEntity.getRole());
    }

}
import LoginRequesterDS from "../models/login/LoginRequesterDS";
import UserVM from "../viewmodels/UserVM";

export default interface ILoginRequester{
    login(loginRequesterDS: LoginRequesterDS): Promise<UserVM>;
}
import axiosCreatiview from "../axios/axiosCreatiview";
import {useUserStore} from "../store/user/UserStore";
import DecryptCookie from "./DecryptCookie";

export default class Login{
    private readonly googleUser: any;
    private readonly email?: string;
    private readonly password?: string;
    private data: any;

    constructor(googleUser: any, email?: string, password?: string) {
        this.googleUser = googleUser;
        this.email = email;
        this.password = password;
    }

    public async login (){
        if(this.googleUser) {
            this.data = this.constructGoogleData();
        }
        else {
            this.data = this.constructClassicData();
        }

        const userStore = useUserStore();
        if(userStore.isLoggedIn){
            return;
        }
        await this.tryLogin();
    }


    private constructGoogleData(){
        const idToken = this.googleUser.getAuthResponse().id_token;
        const profile = this.googleUser.getBasicProfile();
        const email = profile.getEmail();
        const name = profile.getName();
        return {
            idToken,
            name,
            email
        }
    }

    private constructClassicData(){
        return{
            email: this.email,
            password: this.password
        }
    }

    private async tryLogin(){
        try{
            const response = await axiosCreatiview.post('/login', this.data);
            if(response.status === 200){
                console.log('logged in');
                await new DecryptCookie().tryLoginUser();
            }
        }catch(error: any){
            if(error.response.status === 400) {
                alert(error.response.data);
            }
        }

        /*try {
            const response = await axiosServer.post('/login', this.data);
            if (response.status === 200) {
                await store.dispatch('login/loginUser', response.data);
                await store.dispatch('login/hideLoginModal');
                await new DecryptCookie().tryLoginUser();
            }
        }catch(error){
            if(error.response.status === 400)
                alert(error.response.data);
        }*/
    }
}
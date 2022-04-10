import {defineStore} from "pinia";
import UserState from "./UserState";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: new UserState()
    }),
    getters: {
        isAdmin(state): boolean {
            return state.user.isAdmin()
        },
        isLoggedIn(state): boolean{
            return state.user.isLoggedIn();
        }
    },
    actions: {
        login(role: string){
            this.user.setRole(role);
        },

        logout(){
            this.user.setRole(undefined);
        }
    }
});
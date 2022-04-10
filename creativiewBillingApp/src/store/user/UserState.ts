export default class UserState {
    private role: string | undefined;

    isLoggedIn(): boolean{
        return this.role !== undefined;
    }

    isAdmin(): boolean{
        return this.role !== undefined && this.role === "ADMIN";
    }

    setRole(role: string | undefined){
        this.role = role;
    }
}
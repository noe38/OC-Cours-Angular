import { reject } from "q";

export class AuthService{

    isAuth= false;

    signIn(){
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    ()=> {
                        this.isAuth=true;
                        resolve(true);
                    }, 3000
                )
            }
        );
    }

    signOut(){
        this.isAuth=false;
    }
}
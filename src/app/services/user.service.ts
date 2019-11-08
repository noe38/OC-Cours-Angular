import { User } from "../models/model.user";
import { Subject } from "rxjs/Subject";

export class UserService{
    private users: User[] =[
        {
            firstName: 'Patrick',
            lastName: 'Smith',
            email: 'patrick.smith@bidon.com',
            drinkPreference: 'Tequila',
            hobbies:[
                'coder',
                'jardiner'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser (user: User){
        this.users.push(user);
        this.emitUsers();
    }
}
import { IUser } from "./types";

export function isValidPassword(password:string) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
    return pattern.test(password);
}

export function userExist(email:string,usersArray:IUser[]){
    let existFlag=false;
    usersArray.forEach(user => {
        if(user.email===email){
            existFlag=true;
        }
    });
    return existFlag;
}
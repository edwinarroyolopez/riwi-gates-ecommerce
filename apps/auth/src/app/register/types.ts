interface IName{
    firstName:string;
    lastName: string;
}

export interface IUser {
    name: IName;
    email: string;
    password:string;
    address: string;
    phone: string;
}

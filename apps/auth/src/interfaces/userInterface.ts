export  interface IUser {
  name: string,
  email:string,
  password: string,
  phone: string,
  adress: string,
  roles: IObject[]
}

export interface IObject {
  id: number,
  name: 'user' | 'admin' | 'superAdmin'; 
}

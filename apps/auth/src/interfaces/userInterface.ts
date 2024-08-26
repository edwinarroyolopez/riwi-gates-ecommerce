export interface IUser {
  name: string,
  email:string,
  password: string,
  phone: string,
  address: string,
  roles: IObject
}

export interface IObject {
  id: number,
  name: 'user' | 'admin' | 'superAdmin'; 
}

export interface IFetchApi{
  url: string,
  options?: {
    method: string,
    headers: {
    },
    body?: string
  }
}
export interface IShowMessage{
  message: string,
  users:IUser[],
  status: number
}

export default interface IUser {
  name: string,
  email:string,
  password: string,
  phone: string,
  address: string,
  roles: IObject
}

interface IObject {
  id: number,
  name: string
}

export interface IFetchApi{
  url: string,
  options?: {
    method: string,
    headers: {
    },
    body: string
  }
}
export interface IShowMessage{
  message: string,
  status: number
}

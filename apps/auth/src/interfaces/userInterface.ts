export default interface IUser {
  name: string,
  email:string,
  password: string,
  phone: string,
  adress: string,
  roles: IObject[]
}

interface IObject {
  id: number,
  name: string
}

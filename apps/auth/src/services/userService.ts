import { IUser, IFetchApi, IShowMessage } from "@/interfaces/userInterface";
import { Util } from "@/utils/util";

export class UserService{ // Clase UserService

  static verifyDataStatus(data:IUser[] | IUser | IShowMessage, mgs: string){
    if(data && 'message' in data && 'status' in data){
      console.log({message: mgs});
      return (data);
    }
    return;
  }

  static async fetchApi({url, options}: IFetchApi): Promise<IUser[] | IUser | IShowMessage>{ // Método fetchApi
    try{ // Manejador de errores -> Este método es necesario para obtener un error o la respuesta en formato json
      // Las opciones pueden venir o no 
      const response = await fetch(url, options);
      if(!response.ok) ({message: "Error with the response the fetch API"}); // Mostrar error si la respuesta presenta un error
      return await response.json(); // Devuelve la respuesta en formato json
    }catch(error){
      return ({message: "Error with the method fetchApi", status: 500}); // Devuelve un error en caso de falllo
    }
  }
   async getUsers(): Promise<{message: string, users: IUser[] | IUser | IShowMessage, status:number} | IShowMessage>{
    const data = await UserService.fetchApi({url: "http://localhost:3040/users"});
    const dataStatusVerify = UserService.verifyDataStatus(data, "Users not found"); // Función para verifcar la data y el estado 
    if(!dataStatusVerify){ // Si retornar undefinend retorno los usuario
      return ({message: "users found...", users: data, status: 200});
    }
    return (dataStatusVerify); // Retorna el error
  }

    async getUserById(user_id:string):Promise<{message: string, user: IUser[] | IUser | IShowMessage | IShowMessage, status:number} | IShowMessage | {message: string}>{
    if(user_id){
      return ({message: "Error. Is required user_id"});
    }
    const data = await UserService.fetchApi({url: `http://localhost:3040/users/${user_id}`});

    const dataStatusVerify = UserService.verifyDataStatus(data, "User not found"); // Verficar el estado para propagar el error
    if(!dataStatusVerify){
      return ({message: "User found...", user: data, status: 200});
    }
    return (dataStatusVerify);
  }

  async postUser(user:Partial<IUser>):Promise<{message: string} | {message: string, user: IUser[] | IUser | IShowMessage, status:number}>{
    const {name,email,password,phone,address, roles} = user;
    const dataVerify = Util.verifyData(name,email,password,phone,address); // Verificar si falta algún data y retonar true o false
    const newRol = []
    if(!roles){ // Se crea un role. Por defecto todos los usuarios serán role 
      newRol.push({
        id: 2,
        name: "user"
      })
    }
    if(roles){
      newRol.push({id: roles!.id, name: roles!.name}) // Si existe el role se usa el rol que ingresa el usuario
    }
    if(!dataVerify)({message: "Error. Is required all params"}) // Verificar si retorna un false y mostarr los requerimientos

    const data = await UserService.fetchApi({url: "http://localhost:3040/users/", options: { // Crear el usuario
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        address,
        isConfirm: false,
        roles: newRol
      })
    }});

    const dataStatusVerify = UserService.verifyDataStatus(data, "Error to create user");
    if(!dataStatusVerify){// Retornar si el usuario se creó correctamente.
      return ({message: "Created user correctly...", user:data, status: 201})
    }
    return (dataStatusVerify);
  }
  async updateUser(user_id:string, user:Partial<IUser>){ // Método para actualizar un usuario 
    if(!user_id) ({message: "Error. Is required user_id"}); // Si no se obtiene un user id se retorna un error
    const {name,email,password,phone, address, roles} = user; // Destructurar las propiedades del objeto user para verificar todos los datos
    const dataVerify = Util.verifyData(name,email,password,phone, address); // Método para verificar los datos retornar true/ false
    if(!dataVerify) ({message: "Is required all the params..."});

    const data = await UserService.fetchApi({url: `http://localhost:3040/users/${user_id}`, options: {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: user_id,
        name,
        email,
        password,
        phone,
        address,
        roles
      })
    }})
    const dataStatusVerify = UserService.verifyDataStatus(data,"Error to update user");
    if(!dataStatusVerify){
      return ({message: "Updated user correctly", status:200});
    }
    return (dataStatusVerify);
  }

  async deleteUser(user_id:string){ // Métod para eliminar un usuario
    if(!user_id) ({message: "Error. Is required user_id"});
    const data = await UserService.fetchApi({url: `http://localhost:3040/users/${user_id}`, options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }})
    const dataStatusVerify = UserService.verifyDataStatus(data, "Error to delete user"); // Verifcar si contiene un mensaje de error para luego retornar
    if(!dataStatusVerify){
      return ({message: "Deleted user correctly", status: 204})
    }
    return (dataStatusVerify);
  }
}
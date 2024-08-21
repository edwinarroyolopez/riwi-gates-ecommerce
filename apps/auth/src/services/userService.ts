import Util from "@/utils/util";

export default class UserService { // Clase UserService
  async getAllUsers(): Promise<void> { //---->Obtener todos los usuarios // Por el momento el retorno es void, debid a que aún no están las interfaces
    try { // Manejador de eventos
      return await Util.fetchApi("http://localhost:3000/users", {}); // Conexión con el endpoint . El método fetchApi ya valida los errores
    } catch (error) {
        console.log({message: "Error to get all users", error});
    }
  }

  async getUserById():Promise<void>{
    try{

    }catch(){

    }
  }
}

import IUser from "@/interfaces/userInterface";
import { Util } from "@/utils/util";

export default class UserService {
  static async fetchApi(
    // Este método nos sirve para reutilizar tanto su manejador de erores como el fetch
    url: string,
    options: {},
    typeVerb: string,
    nameMethod: string
  ) {
    // Url: endoint,
    // options: options del método,
    // typeVerb: El tipo de verbo que son GET, POST, UPDATE, DELETE,
    // nameMethod: Nombre del método, ya sea getUsers, deleteUser - Esto se utiliza para mostrar en el manejador de errores
    try {
      // Manejador de errores
      const response = await fetch(url, options);
      console.log(response);
      if (!response.ok) {
        // Si la respuesta no es lo que se esperaba lanzar un nuevo error y el status
        throw new Error(`Error with the response - Status: ${response.status}`);
      }
      return response.json(); // Se espera retornar la respuesta en formato json
    } catch (error) {
      // Caso de error mostrar
      console.log({
        message: `Error with the method ${nameMethod}  - verb ${typeVerb}. Try again!`,
        error,
      });
    }
  }

  // Clase UserService
  static async getAllUsers(): Promise<IUser[] | undefined> {
    // Obtener todos los users
    const getUsers = await UserService.fetchApi("http://localhost:3040/users",{},"GET","getAllUsers"); // Conexión con el endpoint . El método fetchApi ya valida los errores
    if (getUsers) {
      console.log({ message: "User found" });
      return getUsers;
    }
  }

  static async getUserById(user_id: number): Promise<IUser | undefined> {
    // Obtener un usuario por id
    // -----> Se espera Obtener un usuario por id. //
    const getUser: IUser = await UserService.fetchApi(`http://localhost:3040/users/${user_id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      "GET",
      "getUserById"
    );
    if (!getUser) {
      console.log({ message: "User not found" });
      return;
    }
    return getUser;
  }

  static async getUserByEmail(email: string | undefined): Promise<IUser | undefined>{ // Obtener un usuario por email
    const users: IUser[] = await UserService.fetchApi("http://localhost:3040/users", {}, "GET", "getUserByEmail"); // Buscar todos los usuario
    const userFound = users.find(user => user.email === email); // Filtrar el usuario por email
    if(userFound){ // Retonar el usuario si se encuentra
      return userFound
    }
    return;// Retornar un false si no se encuentra
  }

  static async createUser(user: Partial<IUser>):Promise<IUser | undefined | object> {// Método para crear usuarios. Se espera que se envíen todos los datos
    const {name, document_number, email,password,birthdate,cellphone,zip_code,
      address,type_document_id,country_id,role_id} = user;
    const dataVerify = Util.verifyData(name,document_number, email, password, birthdate, cellphone, zip_code,
                                      address, type_document_id, country_id,role_id); // Este método verifica si falta un dato 
    if(!dataVerify){ //Mostrar error al faltar un dato
      console.log({message: "Error. Please send all the properties"});
      return;
    }
    const userFound = UserService.getUserByEmail(email); // Obtener usuario encontrado o un undefined
    if(!userFound){
      return await UserService.fetchApi("http://localhost:3040/users",{ //Crear un usuario
          method: "POST",
          headers: {
            "Content-Type": "application-json",
          },
          body: JSON.stringify({ // Enviar el usuario
            name,
            document_number,
            email,
            password: Util.encryptPassword(password!), // Encriptar la password usando bcrypt
            birthdate,
            cellphone,
            zip_code,
            address,
            type_document_id,
            country_id,
            role_id: role_id! | 2 // El usuario siempre se crear con el role 2 user 
          }), // El JSON.stringify se utiliza para convertir el objeto en texto. El cuerpo debe estar en este formato
        },"POST","createUser" // Parámetros para enviar errores...
      );   
    }
    return({message: "User exists. Try again!..."});
  }

  async updateUser(user_id: number, user: Partial<IUser>): Promise<void> {
    // Método para actualizar un usuario
    await UserService.fetchApi(
      `http://localhost:3080/users/${user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Se espera el usuario actualizado
      },
      "PUT",
      "updateUser"
    );
  }
  async updatePassword(user_id: number, newPassword: string): Promise<void> {
    // Método para cambiar la contraseña de un usuario en específico
    // Actualizar la password al usuario
    await UserService.fetchApi(
      `http://localhost:3080/users/${user_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      },
      "PATCH",
      "updatePassword"
    );
  }
  async deletePassword(user_id: number): Promise<void> {}
}

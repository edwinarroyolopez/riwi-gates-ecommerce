import IUser from "@/interfaces/userInterface";

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
  async getAllUsers(): Promise<IUser[]> {
    // Obtener todos los users
    return await UserService.fetchApi(
      "http://localhost:3000/users",
      {},
      "GET",
      "getAllUsers"
    ); // Conexión con el endpoint . El método fetchApi ya valida los errores
  }

  async getUserById(user_id: number): Promise<IUser> {
    // Obtener un usuario por id
    // -----> Se espera Obtener un usuario por id. //
    return await UserService.fetchApi(
      `http://localhost:3000/users/${user_id}`,
      {},
      "GET BY ID",
      "getUserById"
    );
  }

  async createUser(user: Partial<IUser>): Promise<IUser> {
    // Crear un usuario
    return await UserService.fetchApi(
      "http://localhost:3000/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(user), // El JSON.stringify se utiliza para convertir el objeto en texto. El cuerpo debe estar en este formato
      },
      "POST",
      "createUser"
    );
  }

  async updateUser(user_id: number, user: Partial<IUser>): Promise<void> {
    // Método para actualizar un usuario
    await UserService.fetchApi(
      `http://localhost:3000/users/${user_id}`,
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
      `http://localhost:3000/users/${user_id}`,
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

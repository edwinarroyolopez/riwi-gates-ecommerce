import IUser from "@/interfaces/userInterface";
import Util from "@/utils/util";

export default class UserService {
  // Clase UserService
  async getAllUsers(): Promise<IUser[]> {
    // Obtener todos los users
    return await Util.fetchApi("http://localhost:3000/users", {}, "GET"); // Conexión con el endpoint . El método fetchApi ya valida los errores
  }

  async getUserById(user_id: number): Promise<IUser> {
    // Obtener un usuario por id
    // -----> Obtener un usuario por id
    return await Util.fetchApi(
      `http://localhost:3000/users/${user_id}`,
      {},
      "GET BY ID"
    );
  }

  async createUser(user: Partial<IUser>): Promise<IUser> {
    // Crear un usuario
    // Esperando el tipo para indicarlo en el parametro ---->
    return await Util.fetchApi(
      "http://localhost:3000/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(user),
      },
      "POST"
    );
  }

  async updateUser(user_id: number, user: Partial<IUser>): Promise<void> {
    // Esperando el tipo
    await Util.fetchApi(
      `http://localhost:3000/users/${user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
      "PUT"
    );
  }
  async updatePassword(user_id: number, newPassword: string): Promise<void> {
    // Actualizar la password al usuario
    await Util.fetchApi(
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
      "PATCH"
    );
  }
  async deletePassword(user_id: number): Promise<void> {}
}

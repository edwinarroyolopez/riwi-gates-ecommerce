import Util from "@/utils/util";

export default class UserService {
  // Clase UserService
  async getAllUsers(): Promise<void> {
    //---->Obtener todos los usuarios // Por el momento el retorno es void, debid a que aún no están las interfaces // Manejador de eventos
    return await Util.fetchApi("http://localhost:3000/users", {}, "GET"); // Conexión con el endpoint . El método fetchApi ya valida los errores
  }

  async getUserById(user_id: number): Promise<void> {
    // -----> Obtener un usuario por id
    return await Util.fetchApi(
      `http://localhost:3000/users/${user_id}`,
      {},
      "GET BY ID"
    );
  }

  async createUser(user: Partial<>): Promise<void> {
    // Esperando el tipo para indicarlo en el parametro ---->
    const {
      name,
      document_number,
      email,
      password,
      birthdate,
      cellphone,
      zip_code,
      address,
      type_document_id,
      country_id,
      role_id,
    } = user;
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

  async updateUser(user_id: number, user: Partial<>): Promise<void> {
    // Esperando el tipo
    return await Util.fetchApi(
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
}

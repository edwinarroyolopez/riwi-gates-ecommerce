import fetchFromAPI from '../models/api';
import {IUser} from "../interfaces/userInterface"

export const authenticateUser = async (email: string, password: string): Promise<IUser | null> => {
  try {
    // Solicita la lista de usuarios al servidor
    const users: IUser[] = await fetchFromAPI('/users', { method: 'GET' });

    // Busca al usuario con el nombre de usuario proporcionado
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Si el usuario es encontrado y la contraseña coincide, retorna el objeto usuario
      return user;
    } else {
      // Si no coincide o no existe el usuario, retorna null
      return null;
    }2
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
};

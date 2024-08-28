"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { User } from "../../interfaces/Iecommerce";
import { createUser, deleteUser, readUsers, updateUser } from "@admin/app/redux/slices/usersSlice";
import { EditedUserAdminState } from "../../interfaces/Iecommerce"

const UsersAdmin = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const [newUserAdmin, setNewUserAdmin] = useState<string>("");
  const [editedUserAdmin, setEditedUserAdmin] = useState<EditedUserAdminState | null>(null);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:3004/users")
      .then((response) => {
        console.log(response);
        dispatch(readUsers(response.data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  const handleCreateUserAdmin = () => {
    if (newUserAdmin) {
      const newUser: User = {
        id: Date.now().toString(),  // Asume un ID temporal, reemplazar con lógica real
        name: newUserAdmin,
        email: "Default description",
        password: "",
        phone: "",
        adress: "",
        roles: [{id:1, name:"admin"}]
      };

      dispatch(createUser(newUser));

      axios
        .post("http://localhost:3004/users", newUser)
        .then((response) => {
          console.log(response, "del create");
          setNewUserAdmin("");
        })
        .catch((error) => console.error(error));
    }
  };

  const handleUpdateUserAdmin = () => {
    if (editedUserAdmin) {
      const { user } = editedUserAdmin; 

      // Actualizar el usuario en el estado global
      dispatch(updateUser(user));

      axios
        .put(`http://localhost:3004/users/${user.id}`, user)
        .then((response) => {
          console.log(response);
          setEditedUserAdmin(null); // Reinicia el formulario de edición después de la actualización
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDeleteUser = (userId: string) => {
    dispatch(deleteUser(userId));
    axios
      .delete(`http://localhost:3004/users/${userId}`)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Users admin CRUD</h2>
      <h3>User List</h3>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <div>
              {editedUserAdmin?.user.id === user.id ? (
                <div>
                  <input
                    type="text"
                    value={editedUserAdmin.user.name}
                    onChange={(e) =>
                      setEditedUserAdmin({
                        ...editedUserAdmin,
                        user: { ...editedUserAdmin.user, name: e.target.value }
                      })
                    }
                  />
                  <button onClick={handleUpdateUserAdmin}>Update</button>
                </div>
              ) : (
                <div>
                  <span>{user.name}</span>
                  <button
                    onClick={() =>
                      setEditedUserAdmin({
                        user: { ...user }  // Se clona el objeto para evitar mutaciones accidentales
                      })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <aside>
        <input
          type="text"
          value={newUserAdmin}
          onChange={(e) => setNewUserAdmin(e.target.value)}
        />
        <button onClick={handleCreateUserAdmin}>Add User</button>
      </aside>
    </>
  );
};

export default UsersAdmin;

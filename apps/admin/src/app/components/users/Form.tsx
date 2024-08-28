"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from 'react';
import { User } from "../../interfaces/Iecommerce";

interface CreateUserFormProps {
  createUser: (user: User) => void;
  updateUser: (user: User) => void;
  userToEdit: User | null;
  setUserToEdit: (user: User | null) => void;
}

const initialForm: User = {
  id: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  adress: "",
  roles: [{id:1, name: "admin"}],
};

const CreateUserForm: React.FC<CreateUserFormProps> = ({ createUser, updateUser, userToEdit, setUserToEdit }) => {
  const [form, setForm] = useState<User>(initialForm);

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    } else {
      setForm(initialForm);
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.id) {
        form.id = Date.now().toString();  // Generar un ID temporal
        createUser(form);
    } else {
        updateUser(form);
    }
    handleReset(e);
  };

  const handleReset = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm(initialForm);
    setUserToEdit(null);
  };

  return (
    <main>
      <h1>{userToEdit ? "Editar Usuario" : "Agregar Usuario"}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre del usuario"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.name}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.email}
            required
          />
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.password}
            required
          />
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            placeholder="Número de teléfono"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.phone}
          />
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.adress}
          />
          <label>Roles:</label>
          <select name="roles" value={form.roles[1] || ""} onChange={handleChange}>
            <option value="">Seleccione un rol</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <div>
            <button type="submit">Enviar</button>
            <button type="reset" value="Limpiar" onClick={handleReset}>Limpiar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateUserForm;

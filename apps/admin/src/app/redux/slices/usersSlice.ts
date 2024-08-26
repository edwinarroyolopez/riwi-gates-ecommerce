"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  User, Users } from "../../interfaces/Iecommerce";

// Definimos el estado inicial con el tipo adecuado
interface UsersState extends Users {}

// Estado inicial
const initialState: UsersState = {
  users: [],
};

// Slice de Redux
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Tipo de acción y payload para leer usuarios
    readUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // Tipo de acción y payload para crear un nuevo usuario
    createUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    // Tipo de acción y payload para actualizar un usuario
    updateUser: (state, action: PayloadAction<User>) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    // Tipo de acción y payload para eliminar un usuario
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Exporta las acciones y el reducer
export const { 
   
  readUsers, 
  createUser, 
  updateUser, 
  deleteUser,
} = usersSlice.actions;

export default usersSlice.reducer;
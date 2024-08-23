"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products, Product, User } from "../../interfaces/Iecommerce";

// Definimos el estado inicial con el tipo adecuado
interface ProductsState extends Products {}

// Estado inicial
const initialState: ProductsState = {
  users: [],
  products: [],
};

// Slice de Redux
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Tipo de acción y payload para leer productos
    readProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    // Tipo de acción y payload para crear un nuevo producto
    createProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    // Tipo de acción y payload para actualizar un producto
    updateProduct: (state, action: PayloadAction<Product>) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    // Tipo de acción y payload para eliminar un producto
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
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
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Exporta las acciones y el reducer
export const { 
  readProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  readUsers, 
  createUser, 
  updateUser, 
  deleteUser,
} = productsSlice.actions;

export default productsSlice.reducer;

"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products, Product } from "../../interfaces/Iecommerce";

// Definimos el estado inicial con el tipo adecuado
interface ProductsState extends Products {}

// Estado inicial
const initialState: ProductsState = {
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
  },
});

// Exporta las acciones y el reducer
export const { 
  readProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  
} = productsSlice.actions;

export default productsSlice.reducer;

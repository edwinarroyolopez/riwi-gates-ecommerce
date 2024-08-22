"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Category, Subcategory, ImagePromotion, Order, User, Permission, State, City } from "../../interfaces/Iecommerce"; 

// Definimos el estado inicial con el tipo adecuado
interface ProductsState {
  products: Product[];
  categories: Category[];
  subcategories: Subcategory[];
  imagePromotions: ImagePromotion[];
  orders: Order[];
  users: User[];
  permissions: Permission[];
  states: State[];
  cities: City[];
}

// Estado inicial
const initialState: ProductsState = {
  products: [],
  categories: [],
  subcategories: [],
  imagePromotions: [],
  orders: [],
  users: [],
  permissions: [],
  states: [],
  cities: [],
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
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    // Tipo de acción y payload para leer categorías
    readCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    // Tipo de acción y payload para leer subcategorías
    readSubcategories: (state, action: PayloadAction<Subcategory[]>) => {
      state.subcategories = action.payload;
    },
    // Tipo de acción y payload para leer promociones de imagen
    readImagePromotions: (state, action: PayloadAction<ImagePromotion[]>) => {
      state.imagePromotions = action.payload;
    },
    // Tipo de acción y payload para leer órdenes
    readOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    // Tipo de acción y payload para leer usuarios
    readUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // Tipo de acción y payload para leer permisos
    readPermissions: (state, action: PayloadAction<Permission[]>) => {
      state.permissions = action.payload;
    },
    // Tipo de acción y payload para leer estados
    readStates: (state, action: PayloadAction<State[]>) => {
      state.states = action.payload;
    },
    // Tipo de acción y payload para leer ciudades
    readCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { 
  readProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  readCategories,
  readSubcategories,
  readImagePromotions,
  readOrders,
  readUsers,
  readPermissions,
  readStates,
  readCities 
} = productsSlice.actions;

export default productsSlice.reducer;


'use client'
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Importar tus slices (reductores)
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    // Agrega más slices aquí
  },
});

// Tipos personalizados para el store y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

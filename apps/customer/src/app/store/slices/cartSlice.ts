'use client'
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: { id: number, name: string, quantity: number }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    // Otros reductores para actualizar la cantidad, limpiar el carrito, etc.
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

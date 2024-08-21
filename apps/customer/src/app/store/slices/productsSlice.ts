import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Otros reductores para manejar productos
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

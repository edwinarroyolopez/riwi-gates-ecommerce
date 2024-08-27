import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import axios from 'axios';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

// Acción asincrónica para obtener los productos desde una API
export const fetchProducts:any = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response:any = await fetch('http://localhost:3004/products');
    console.log({ data: response.data })
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Aquí podrías agregar reducers sincrónicos si es necesario
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
      });
  },
});

export default productsSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface ProductsState {
//   products: Product[];
// }

// const initialState: ProductsState = {
//   products: [],
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     // Otros reductores para manejar productos
//   },
// });

// export const { setProducts } = productsSlice.actions;
// export default productsSlice.reducer;

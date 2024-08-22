import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer
    },
});

// Define el tipo RootState basado en el store
export type RootState = ReturnType<typeof store.getState>;

// Define el tipo AppDispatch si es necesario
export type AppDispatch = typeof store.dispatch;

export default store;

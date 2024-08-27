'use client'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../store';
import { fetchProducts } from '../store/slices/productsSlice';
import { Product } from '../types/product';

export const useProducts = () => {
  
  console.log('useProducts')

  const dispatch = useDispatch();

  // Selector para obtener productos desde el estado de Redux
  const products = useSelector((state: RootState) => state.products.items);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  // Fetch de productos al montar el componente
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Función para filtrar productos por categoría
  const filterByCategory = (categoryName: string): Product[] => {
    return products.filter((product:Product) =>
      product.categories.some(category => category.name === categoryName)
    );
  };

  // Función para buscar productos por nombre
  const searchProducts = (searchTerm: string): Product[] => {
    return products.filter((product:Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return {
    products,
    loading,
    error,
    filterByCategory,
    searchProducts,
  };
};

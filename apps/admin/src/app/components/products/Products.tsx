"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, readProducts, updateProduct } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/store";
import { Product, Category } from "../../interfaces/Iecommerce";
import CreateForm from "./Form";
import Table from "./Table";
import Filter from "./Filter";
import {EditedProductState} from "../../interfaces/Iecommerce"

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const [editedProduct, setEditedProduct] = useState<EditedProductState | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:3004/products");
        dispatch(readProducts(response.data));
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleCreateProduct = async (newProduct: Product) => {
    try {
      await axios.post("http://localhost:3004/products", newProduct);
      dispatch(createProduct(newProduct));
      setFilteredProducts([...filteredProducts, newProduct]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      await axios.put(`http://localhost:3004/products/${updatedProduct.id}`, updatedProduct);
      dispatch(updateProduct(updatedProduct));
      setFilteredProducts(
        filteredProducts.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setEditedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await axios.delete(`http://localhost:3004/products/${productId}`);
      dispatch(deleteProduct(productId));
      setFilteredProducts(filteredProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleFilter = (query: string) => {
    if (query) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <>
      <h2>Product CRUD</h2>
      <Filter onFilter={handleFilter} />

      {/* Renderizar el formulario para crear o editar un producto */}
      <CreateForm
        createData={handleCreateProduct}
        updateData={handleUpdateProduct}
        dataToEdit={editedProduct?.product || null}
        setDataToEdit={(product: Product | null) => 
          setEditedProduct(product ? { category: { id: 0, name: "", subcategories: [] }, product } : null)}
      />
      
      <h3>Product List</h3>
      <Table 
        data={filteredProducts} 
        setDataToEdit={(product: Product | null) => 
          setEditedProduct(product ? { category: { id: 0, name: "", subcategories: [] }, product } : null)}
        deleteData={handleDeleteProduct} 
      />
    </>
  );
};

export default Products;



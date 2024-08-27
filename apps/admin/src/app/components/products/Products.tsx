"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, readProducts, updateProduct } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/store";
import { Product, Category } from "../../interfaces/Iecommerce";
import CreateForm from "./Form";

interface EditedProductState {
  category: Category;
  product: Product;
}

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const [editedProduct, setEditedProduct] = useState<EditedProductState | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:3004/products");
        dispatch(readProducts(response.data));
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
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      await axios.put(`http://localhost:3004/products/${updatedProduct.id}`, updatedProduct);
      dispatch(updateProduct(updatedProduct));
      setEditedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await axios.delete(`http://localhost:3004/products/${productId}`);
      dispatch(deleteProduct(productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <h2>Product CRUD</h2>
      
      {/* Renderizar el formulario para crear o editar un producto */}
      <CreateForm
        createData={handleCreateProduct}
        updateData={handleUpdateProduct}
        dataToEdit={editedProduct?.product || null}
        setDataToEdit={(product: Product | null) => setEditedProduct(product ? { category: { men: [], women: [], kids: [] }, product } : null)}
      />
      
      <h3>Product List</h3>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <div>
              {editedProduct?.product.id === product.id ? (
                <div>
                  <input
                    type="text"
                    value={editedProduct.product.name}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        product: { ...editedProduct.product, name: e.target.value }
                      })
                    }
                  />
                  <button onClick={() => handleUpdateProduct(editedProduct.product)}>Update</button>
                </div>
              ) : (
                <div>
                  <span>{product.name}</span>
                  <button
                    onClick={() =>
                      setEditedProduct({
                        category: { men: [], women: [], kids: [] },  // Placeholder, replace with actual logic
                        product: product,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;



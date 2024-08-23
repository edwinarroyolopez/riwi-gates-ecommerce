"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, Product } from "@admin/app/interfaces/Iecommerce";
import { RootState } from "@admin/app/redux/store";
import { createProduct, deleteProduct, readProducts, updateProduct } from "@admin/app/redux/slices/productsSlice";

// Interface para gestionar el estado del producto editado
interface EditedProductState {
  category: Category;
  product: Product; 
}

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const [newProductName, setNewProductName] = useState<string>("");
  const [editedProduct, setEditedProduct] = useState<EditedProductState | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3004/products")
      .then((response) => {
        console.log(response);
        dispatch(readProducts(response.data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct: Product = {
        id: (Date.now()).toString(),  // Asume un ID temporal, reemplazar con lógica real
        name: newProductName,
        description: "Default description",
        price: 0,
        stock: 0,
        size: [], // Placeholder for sizes, adjust according to actual logic
        thumbnail: "https://example.com/image.jpg",
        images: [{ id: 1, url: "https://example.com/image.jpg" }],  // Placeholder
        categories: [],  // Placeholder, adjust according to actual logic
      };

      dispatch(createProduct(newProduct));

      axios
        .post("http://localhost:3004/products", newProduct)
        .then((response) => {
          console.log(response);
          setNewProductName("");
        })
        .catch((error) => console.error(error));
    }
  };

  const handleUpdateProduct = () => {
    if (editedProduct) {
      const { product } = editedProduct;

      // Actualizar el producto en el estado global
      dispatch(updateProduct(product));

      axios
        .put(`http://localhost:3004/products/${product.id}`, product)
        .then((response) => {
          console.log(response);
          setEditedProduct(null);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDeleteProduct = (productId: string) => {
    dispatch(deleteProduct(productId));
    axios
      .delete(`http://localhost:3004/products/${productId}`)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Product CRUD</h2>
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
                  <button onClick={handleUpdateProduct}>Update</button>
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
      <aside>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button onClick={handleCreateProduct}>Add Product</button>
      </aside>
    </>
  );
};

export default Products;


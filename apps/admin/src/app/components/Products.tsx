'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, readProducts, updateProduct } from "../redux/slices/productsSlice";
import { RootState } from "../redux/store";
import { Product, Category, Subcategory, ImagePromotion, Order, User, Permission, State, City } from "../interfaces/Iecommerce"; // Asegúrate de importar desde el archivo correcto

// Interface para gestionar el estado del producto editado
interface EditedProductState {
  category: string;
  subcategory: string;
  product: Product;  // Cambiado para reflejar el objeto Product completo
}

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const [newProductName, setNewProductName] = useState<string>("");
  const [editedProduct, setEditedProduct] = useState<EditedProductState | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3001/products")
      .then((response) => {
        console.log(response);
        dispatch(readProducts(response.data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct: Product = {
        id: Date.now(),  // Asume un ID temporal, reemplazar con lógica real
        name: newProductName,
        description: "",
        price: 0,
        units: 0,
        category_id: 1,  // Asume un ID de categoría, reemplazar con lógica real
        subcategory_id: 1,  // Asume un ID de subcategoría, reemplazar con lógica real
        images: [],
      };

      dispatch(createProduct(newProduct));

      axios
        .post("http://localhost:3001/products", newProduct)
        .then((response) => {
          console.log(response);
          setNewProductName("");
        })
        .catch((error) => console.error(error));
    }
  };

  const handleUpdateProduct = () => {
    if (editedProduct) {
      const { category, subcategory, product } = editedProduct;

      // Actualizar el producto en el estado global
      dispatch(updateProduct(product));

      axios
        .put(`http://localhost:3001/products/${product.id}`, product)
        .then((response) => {
          console.log(response);
          setEditedProduct(null);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDeleteProduct = (productId: number) => {
    dispatch(deleteProduct(productId));
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2>Crud de productos</h2>
      <h3>Lista de productos</h3>
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
                  <button onClick={handleUpdateProduct}>Actualizar</button>
                </div>
              ) : (
                <div>
                  <span>{product.name}</span>
                  <button
                    onClick={() =>
                      setEditedProduct({
                        category: "Category Placeholder",  // Asume un valor temporal
                        subcategory: "Subcategory Placeholder",  // Asume un valor temporal
                        product: product,
                      })
                    }
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Eliminar
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
        <button onClick={handleCreateProduct}>Agregar producto</button>
      </aside>
    </>
  );
};

export default Products;

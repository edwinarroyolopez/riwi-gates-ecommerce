'use client'
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';

interface Product {
  id: string;
  name: string;
  description: string;
}

const HomePage: FC<{ products: Product[] }> = ({ products }) => {
  return (
      <Layout>
        <h2>Welcome to Our Store</h2>
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </li>
          ))}
        </ul>
      </Layout>
  );
};

// Función para obtener productos
async function fetchProducts() {
  console.log({ test: 'fetchProducts' })
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  const results = data.results

  const renameKey = (obj: Record<string, any>, oldKey: string, newKey: string) => {
    const { [oldKey]: value, ...rest } = obj;
    return { ...rest, [newKey]: value };
  };
  const updatedData = results.map((item: any) => renameKey(item, 'type', 'description'));
  return updatedData; // Ajusta esto según la estructura de tu API
}

// Página que usa la función de data fetching
const Page = async () => {
  const products = await fetchProducts();
  return <HomePage products={products} />;
};

export default Page;

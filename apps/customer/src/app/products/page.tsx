import { FC } from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

interface Product {
  id: string;
  name: string;
  description: string;
}

const ProductsPage: FC<{ products: Product[] }> = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  const results = data.results;
  // Renombrar la clave 'type' a 'description'
  const renameKey = (obj: Record<string, any>, oldKey: string, newKey: string) => {
    const { [oldKey]: value, ...rest } = obj;
    return { ...rest, [newKey]: value };
  };
  const products = results.map((item: any) => renameKey(item, 'type', 'description'));

  return (
      <Layout>
        <ProductList products={products} />
      </Layout>
  );
};

export default ProductsPage;

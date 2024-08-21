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

  const products = data.results;
  
  return (
      <Layout>
        <ProductList products={products} />
      </Layout>
  );
};

export default ProductsPage;

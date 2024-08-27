import { FC } from 'react';
import Layout from '../components/Layout';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList';

interface Product {
  id: string;
  name: string;
  description: string;
}

const ProductsPage: FC<{ products: Product[] }> = async () => {

  const { products, loading, error, filterByCategory } = useProducts();
  console.log({ products })

  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  const productsR = data.results;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <ProductList products={productsR} />
    </Layout>
  );
};

export default ProductsPage;

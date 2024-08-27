'use client'

import { FC } from 'react';
import Layout from '../components/Layout';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList';

const ProductsPage: FC = () => {

  const { products, loading, error, filterByCategory } = useProducts();


  console.log({ products, loading, error })

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsPage;

'use server'

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { 
  selectProducts,
  selectLoading,
  selectError, 
  fetchProducts
 } from '../store/slices/productsSlice';


 const DataComponent: FC = () => {
  const data = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
        {data.map((product:any) => (
            <li key={product.id}>
                {product.name} - ${product.id}
                {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
            </li>
        ))}
    </ul>
);
}

export default DataComponent
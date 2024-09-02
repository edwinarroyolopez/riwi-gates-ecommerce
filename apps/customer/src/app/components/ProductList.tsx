'use client'
// import { addItemToCart } from '../store/slices/cartSlice';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setProducts } from '../store/slices/productsSlice';
import { useSelector } from 'react-redux';
import { 
    selectProducts,
    selectLoading,
    selectError, 
    fetchProducts
   } from '../store/slices/productsSlice';

interface Product {
    id: string;
    name: string;
    description: string;
}

const ProductList = () => {
    // const dispatch = useDispatch();

    const   products: Product[]  = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
 



    // const handleAddToCart = (product: Product) => {
    //     console.log({ product })
    //     // dispatch(addItemToCart({ ...product, quantity: 1 }));
    // };

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.id}
                    {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
                </li>
            ))}
        </ul>
    );
};

export default ProductList;

'use client'
import { addItemToCart } from '../store/slices/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/slices/productsSlice';

interface Product {
    id: string;
    name: string;
    description: string;
}

const ProductList = ({ products }: { products: [Product] }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      // Actualizar el estado global con los productos en el lado del cliente
      dispatch(setProducts(products));
    }, [dispatch, products]);
    

    const handleAddToCart = (product: Product) => {
        dispatch(addItemToCart({ ...product, quantity: 1 }));
    };

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.id}
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;

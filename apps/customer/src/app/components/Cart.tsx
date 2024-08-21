'use client'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

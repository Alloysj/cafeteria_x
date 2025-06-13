import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useOrders, type OrderItem } from '../../hooks/useOrders';

const PlaceOrder: React.FC = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    const items: OrderItem[] = cart.map((c) => ({
      id: c.id,
      name: c.name,
      price: c.price,
      quantity: 1,
    }));
    const order = await placeOrder(items);
    clearCart();
    navigate(`/orders/${order.id}/summary`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Place Order</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between bg-white p-3 rounded-lg shadow">
              <span>{item.name}</span>
              <div className="flex items-center space-x-4">
                <span>KES {item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold">Total: KES {total}</div>
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;

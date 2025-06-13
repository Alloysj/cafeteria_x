import React from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';
import OrderCard from '../../components/OrderCard';

const OrderHistory: React.FC = () => {
  const { orders } = useOrders();

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Link key={order.id} to={`/orders/${order.id}/summary`}>
              <OrderCard order={order} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;

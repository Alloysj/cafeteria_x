import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrders, type Order } from '../../hooks/useOrders';
import useApi from '../../hooks/useApi';

const OrderSummary: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById } = useOrders();
  const api = useApi();
  const [order, setOrder] = useState<Order | undefined>();
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      const fetched = await getOrderById(Number(id));
      setOrder(fetched);
      try {
        const payment = await api.get<{ status: string }>(`/api/payments/${id}`);
        setPaid(payment?.status === 'completed' || payment?.status === 'paid');
      } catch (err) {
        console.error('Failed to load payment', err);
      }
    };
    load();
  }, [id, getOrderById, api]);

  if (!order) {
    return <div className="p-4">Order not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="bg-white p-4 rounded shadow">
        <ul>
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>
                {item.quantity} x {item.price}
              </span>
            </li>
          ))}
        </ul>
        <div className="font-bold mt-2">Total: KES {order.total}</div>
      </div>
      {!paid && (
        <Link
          to={`/orders/${order.id}/pay`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Proceed to Payment
        </Link>
      )}
      {paid && (
        <span className="text-green-600 font-bold">Payment Received</span>
      )}
      <Link to="/orders/history" className="block text-blue-600 mt-4">
        Back to Order History
      </Link>
    </div>
  );
};

export default OrderSummary;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrders, type Order } from '../../hooks/useOrders';
import useApi from '../../hooks/useApi';

const PayOrder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById, payOrder } = useOrders();
  const api = useApi();
  const [order, setOrder] = useState<Order | undefined>();
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      if (!id) return;
      const fetched = await getOrderById(Number(id));
      setOrder(fetched);
      try {
        const payment = await api.get<{ status: string }>(`/api/payments/${id}`);
        setPaid(payment?.status === 'completed' || payment?.status === 'paid');
      } catch (err) {
        console.error('Failed to fetch payment', err);
      }
    };
    load();
  }, [id, getOrderById, api]);

  if (!order) {
    return <div className="p-4">Order not found.</div>;
  }

  const handlePay = async () => {
    await payOrder(order.id, order.total);
    setPaid(true);
    navigate(`/orders/${order.id}/summary`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Pay for Order #{order.id}</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="font-bold mb-2">Total: KES {order.total}</div>
        {paid ? (
          <span className="text-green-600 font-bold">Already Paid</span>
        ) : (
          <button
            onClick={handlePay}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Simulate Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default PayOrder;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';

const PayOrder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById, payOrder } = useOrders();
  const order = getOrderById(Number(id));
  const navigate = useNavigate();

  if (!order) {
    return <div className="p-4">Order not found.</div>;
  }

  const handlePay = () => {
    payOrder(order.id);
    navigate(`/orders/${order.id}/summary`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Pay for Order #{order.id}</h1>
      <div className="bg-white p-4 rounded shadow">
        <div className="font-bold mb-2">Total: KES {order.total}</div>
        {order.paid ? (
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

import React from 'react';
import { Order } from '../hooks/useOrders';

interface Props {
  order: Order;
}

const OrderCard: React.FC<Props> = ({ order }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-bold">Order #{order.id}</h2>
    <ul className="mt-2">
      {order.items.map((item) => (
        <li key={item.id} className="text-gray-600">
          {item.name} x {item.quantity}
        </li>
      ))}
    </ul>
    <p className="mt-2 font-bold text-gray-800">Total: KES {order.total}</p>
    <p className={`mt-2 text-sm font-bold ${order.paid ? 'text-green-500' : 'text-yellow-500'}`}>
      {order.paid ? 'Paid' : 'Pending Payment'}
    </p>
  </div>
);

export default OrderCard;

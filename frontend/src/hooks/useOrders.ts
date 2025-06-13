import { useState } from 'react';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  paid: boolean;
}

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  });

  const persist = (data: Order[]) => {
    setOrders(data);
    localStorage.setItem('orders', JSON.stringify(data));
  };

  const placeOrder = (items: OrderItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder: Order = {
      id: Date.now(),
      items,
      total,
      paid: false,
    };
    const updated = [...orders, newOrder];
    persist(updated);
    return newOrder;
  };

  const getOrderById = (id: number) => orders.find((o) => o.id === id);

  const payOrder = (id: number) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, paid: true } : o));
    persist(updated);
  };

  return { orders, placeOrder, payOrder, getOrderById };
};

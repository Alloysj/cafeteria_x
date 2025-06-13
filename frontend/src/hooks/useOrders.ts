import { useEffect, useState } from 'react';
import useApi from './useApi';

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
  const { get, post } = useApi();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await get<Order[]>(`/api/orders`);
        setOrders(data);
      } catch (err) {
        console.error('Failed to load orders', err);
      }
    };
    fetchOrders();
  }, [get]);

  const placeOrder = async (items: OrderItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder = await post<Order>('/api/orders/create', { items, total });
    setOrders((prev) => [...prev, newOrder]);
    return newOrder;
  };

  const getOrderById = async (id: number) => {
    try {
      return await get<Order>(`/api/orders/${id}`);
    } catch (err) {
      console.error('Failed to fetch order', err);
      return undefined;
    }
  };

  const payOrder = async (id: number, amount: number) => {
    try {
      await post('/api/payments', { orderId: id, amount, method: 'cash' });
    } catch (err) {
      console.error('Failed to process payment', err);
    }
  };

  return { orders, placeOrder, payOrder, getOrderById };
};

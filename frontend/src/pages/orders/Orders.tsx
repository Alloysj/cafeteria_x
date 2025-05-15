import React from "react";

interface Order {
    id: number;
    customerName: string;
    items: { name: string; quantity: number }[];
    total: number;
    status: "Pending" | "Completed" | "Cancelled";
}

const Orders: React.FC = () => {
    const orders: Order[] = [
        {
            id: 1,
            customerName: "John Doe",
            items: [
                { name: "Burger", quantity: 2 },
                { name: "Fries", quantity: 1 },
            ],
            total: 1200,
            status: "Pending",
        },
        {
            id: 2,
            customerName: "Jane Smith",
            items: [{ name: "Pizza", quantity: 1 }],
            total: 800,
            status: "Completed",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Orders</h1>
            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold">Order #{order.id}</h2>
                        <p className="text-gray-600">Customer: {order.customerName}</p>
                        <ul className="mt-2">
                            {order.items.map((item, index) => (
                                <li key={index} className="text-gray-600">
                                    {item.name} x {item.quantity}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2 text-gray-600">Total: KES {order.total}</p>
                        <p
                            className={`mt-2 text-sm font-bold ${
                                order.status === "Pending"
                                    ? "text-yellow-500"
                                    : order.status === "Completed"
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            Status: {order.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
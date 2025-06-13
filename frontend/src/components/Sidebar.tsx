import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <aside className="w-48 bg-gray-100 p-4 space-y-2">
      <nav className="space-y-2">
        <Link to="/orders/new" className="block p-2 rounded hover:bg-gray-200">
          Place Order
        </Link>
        <Link to="/orders/history" className="block p-2 rounded hover:bg-gray-200">
          Order History
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;


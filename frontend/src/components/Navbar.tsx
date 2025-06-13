import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">
          CafeteriaX
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/cafeteria" className="hover:underline">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/orders/new" className="hover:underline">
                  Place Order
                </Link>
              </li>
              <li>
                <Link to="/orders/history" className="hover:underline">
                  Order History
                </Link>
              </li>
            </>
          )}
          {user ? (
            <li>
              <button onClick={logout} className="hover:underline bg-transparent border-none cursor-pointer">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
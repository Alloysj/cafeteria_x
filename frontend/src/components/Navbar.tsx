import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

  const { user, logout } = useAuth();
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
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
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
};

export default Navbar;

              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
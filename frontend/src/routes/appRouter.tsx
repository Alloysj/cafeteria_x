import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./privateRoute";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import StaffDashboard from "../pages/dashboard/StaffDashboard";
import Orders from "../pages/orders/Orders";
import PlaceOrder from "../pages/orders/PlaceOrder";
import OrderSummary from "../pages/orders/OrderSummary";
import PayOrder from "../pages/orders/PayOrder";
import OrderHistory from "../pages/orders/OrderHistory";
import App from "../App"; // Assuming you have an App component for the main layout

const AppRouter: React.FC = () => {
    const isAuthenticated = true; // Replace with actual authentication logic
    const userRole = "user"; // Replace with actual role logic (e.g., "user", "staff", "admin")

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cafeteria" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Private Routes */}
                <Route
                    element={<PrivateRoute isAuthenticated={isAuthenticated} role={userRole} allowedRoles={["admin"]} />}
                >
                    <Route path="/admin" element={<AdminDashboard />} />
                </Route>
                <Route
                    element={<PrivateRoute isAuthenticated={isAuthenticated} role={userRole} allowedRoles={["staff"]} />}
                >
                    <Route path="/staff" element={<StaffDashboard />} />
                    <Route path="/staff/orders" element={<Orders />} />
                </Route>
                <Route
                    element={<PrivateRoute isAuthenticated={isAuthenticated} role={userRole} allowedRoles={["user"]} />}
                >
                    <Route path="/orders/new" element={<PlaceOrder />} />
                    <Route path="/orders/:id/summary" element={<OrderSummary />} />
                    <Route path="/orders/:id/pay" element={<PayOrder />} />
                    <Route path="/orders/history" element={<OrderHistory />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
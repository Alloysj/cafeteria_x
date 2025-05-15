import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
    role: "user" | "staff" | "admin";
    allowedRoles: ("user" | "staff" | "admin")[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, role, allowedRoles }) => {
    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(role)) {
        // Redirect to a "Not Authorized" page if the role is not allowed
        return <Navigate to="/not-authorized" />;
    }

    // Render the child components if authenticated and role is allowed
    return <Outlet />;
};

export default PrivateRoute;
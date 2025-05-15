import React from "react";

const StaffDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Staff Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">View Orders</h2>
                    <p className="text-gray-600">Track and manage customer orders.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">Manage Menu</h2>
                    <p className="text-gray-600">Update food availability and pricing.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">Track Food Consumption</h2>
                    <p className="text-gray-600">Monitor food usage and inventory levels.</p>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
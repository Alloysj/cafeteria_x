import React from "react";

const AdminDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">Manage Users</h2>
                    <p className="text-gray-600">View, edit, or delete user accounts.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">Manage Menu</h2>
                    <p className="text-gray-600">Add, edit, or remove food items from the menu.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">View Reports</h2>
                    <p className="text-gray-600">Analyze sales and food consumption reports.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
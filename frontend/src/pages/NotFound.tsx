import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/cafeteria");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
                <button
                    onClick={handleRedirect}
                    className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Go to Cafeteria Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
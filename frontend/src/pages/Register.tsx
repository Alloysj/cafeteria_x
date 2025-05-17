import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
import { FaGoogle, FaFacebook, FaUtensils } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import api from "../utils/api";

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        location: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password") {
            const strength = zxcvbn(value).score;
            setPasswordStrength(strength);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (passwordStrength < 3) {
            setError("Password is too weak. Please use a stronger password.");
            return;
        }

        try {
            const response = await api.post("/api/register", formData);
            if (response.data.success) {
                navigate("/login");
            } else {
                setError(response.data.message || "An error occurred during registration.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={() => navigate(-1)}
                            className="flex items-center text-gray-600 hover:text-orange-500"
                        >
                            <FiArrowLeft className="mr-1" />
                            Back
                        </button>
                        <div className="flex items-center space-x-2">
                            <FaUtensils className="text-orange-500 text-2xl" />
                            <h1 className="text-xl font-bold text-gray-800">CafeteriaX</h1>
                        </div>
                        <div className="w-8"></div> {/* Spacer for alignment */}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 max-w-md">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-4 px-6 text-white">
                        <h2 className="text-2xl font-bold">Create Your Account</h2>
                        <p className="text-orange-100">Join us to start ordering delicious meals</p>
                    </div>

                    <div className="p-6">
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                    Location
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                    required
                                />
                                <div className="mt-1">
                                    <div className="flex items-center">
                                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full ${
                                                    passwordStrength === 0 ? "bg-red-500" :
                                                    passwordStrength === 1 ? "bg-orange-400" :
                                                    passwordStrength === 2 ? "bg-yellow-400" :
                                                    passwordStrength === 3 ? "bg-green-400" :
                                                    "bg-green-500"
                                                }`}
                                                style={{ width: `${(passwordStrength + 1) * 25}%` }}
                                            ></div>
                                        </div>
                                        <span className={`ml-2 text-xs font-medium ${
                                            passwordStrength === 0 ? "text-red-500" :
                                            passwordStrength === 1 ? "text-orange-500" :
                                            passwordStrength === 2 ? "text-yellow-500" :
                                            passwordStrength === 3 ? "text-green-500" :
                                            "text-green-600"
                                        }`}>
                                            {["Weak", "Fair", "Good", "Strong", "Very Strong"][passwordStrength]}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition-colors shadow-sm"
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Or sign up with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    <FaGoogle className="text-red-500 mr-2" />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    <FaFacebook className="text-blue-600 mr-2" />
                                    Facebook
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <button 
                                    onClick={() => navigate('/login')}
                                    className="font-medium text-orange-500 hover:text-orange-600"
                                >
                                    Sign in
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
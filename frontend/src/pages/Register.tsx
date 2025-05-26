import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
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
        <div 
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-lg shadow-xl relative z-10 backdrop-blur-sm">
                <div className="text-center">
                    <IoFastFoodOutline className="mx-auto text-4xl text-blue-600 mb-2" />
                    <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
                    <p className="text-gray-600 mt-1">Join us to start ordering delicious meals</p>
                </div>
                
                {error && (
                    <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your first name"
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your last name"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your location"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Choose a username"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your email"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Create a password"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md"
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
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <FaGoogle className="text-red-500 mr-2" />
                            Google
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <FaFacebook className="text-blue-600 mr-2" />
                            Facebook
                        </button>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button 
                        onClick={() => navigate('/login')}
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
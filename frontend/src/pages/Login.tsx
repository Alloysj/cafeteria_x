import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { IoFastFoodOutline } from "react-icons/io5";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login, error: authError } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const success = await login(email, password);
        if (success) {
            navigate('/cafeteria');
        } else {
            setError('Invalid credentials');
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
                    <h2 className="text-2xl font-bold text-gray-800">Welcome to CafeteriaX</h2>
                    <p className="text-gray-600 mt-1">Sign in to your account</p>
                </div>
                
                {(error || authError) && (
                    <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {error || authError}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                            Forgot password?
                        </a>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md"
                    >
                        Login
                    </button>
                </form>
                
                <div className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;

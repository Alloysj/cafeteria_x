import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import zxcvbn from "zxcvbn"; 

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

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Validate password strength
        if (passwordStrength < 3) {
            setError("Password is too weak. Please use a stronger password.");
            return;
        }

        try {
            // Send registration data to backend
            const response = await axios.post("/api/register", formData);

            if (response.data.success) {
                // Redirect to login page after successful registration
                navigate("/login");
            } else {
                setError(response.data.message || "An error occurred during registration.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                        <p className={`text-sm mt-1 ${passwordStrength < 3 ? "text-red-500" : "text-green-500"}`}>
                            Password Strength: {["Weak", "Fair", "Good", "Strong", "Very Strong"][passwordStrength]}
                        </p>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Register
                    </button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                        Sign up with Google
                    </button>
                    <button className="ml-4 px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300">
                        Sign up with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
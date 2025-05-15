import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useFoodItems } from "../hooks/useFoodItems";
import { useCart } from "../hooks/useCart"; 

const Home: React.FC = () => {
    // const navigate = useNavigate();
    const { foodItems, searchFoodItems } = useFoodItems();
    const { cart, addToCart, removeFromCart, clearCart, total } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        searchFoodItems(e.target.value);
    };

    const handleCheckout = () => {
        // Redirect to Mpesa payment page or handle payment logic
        alert(`Checkout successful! Total bill: KES ${total}`);
        clearCart();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Cafeteria Menu</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for food..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-lg font-bold mt-2">{item.name}</h2>
                        <p className="text-gray-600">KES {item.price}</p>
                        <p className={`text-sm ${item.available ? "text-green-500" : "text-red-500"}`}>
                            {item.available ? "Available" : "Out of Stock"}
                        </p>
                        {item.available && (
                            <button
                                onClick={() => addToCart(item)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Cart Summary</h2>
                {cart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center py-2">
                                    <span>{item.name}</span>
                                    <span>KES {item.price}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <p className="text-lg font-bold">Total: KES {total}</p>
                            <button
                                onClick={handleCheckout}
                                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Checkout with Mpesa
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
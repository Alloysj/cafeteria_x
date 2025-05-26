import React, { useState, useEffect } from "react";
import { FiSearch, FiClock, FiStar, FiShoppingCart, FiX } from "react-icons/fi";
import { FaMotorcycle, FaUtensils } from "react-icons/fa";
import { useFoodItems } from "../hooks/useFoodItems";
import { useCart } from "../hooks/useCart";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  available: boolean;
  image: string;
  category: string;
  prepTime: number;
  rating: number;
}

const Home: React.FC = () => {
  const { foodItems: allFoodItems } = useFoodItems();
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(allFoodItems);

  const categories = [
    "All",
    "Hot Beverages",
    "Cold Drinks",
    "Snacks",
    "Buffalo Special",
    "Main Dishes",
    "Chips & Chicken"
  ];

  useEffect(() => {
    let results = allFoodItems;

    if (searchQuery.trim() !== "") {
      results = results.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCategory !== "All") {
      results = results.filter(item => item.category === activeCategory);
    }

    setFilteredItems(results);
  }, [searchQuery, activeCategory, allFoodItems]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckout = () => {
    alert(`Checkout successful! Total bill: KES ${total}`);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Consistent with landing page */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaUtensils className="text-blue-600 text-2xl" />
              <h1 className="text-xl font-bold text-blue-600">MealMinder</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <FiShoppingCart className="text-2xl text-blue-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Search - Using primary blue gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6 px-4">
        <div className="container mx-auto">
          <div className="relative max-w-xl mx-auto">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* Categories - Secondary orange for food-related elements */}
      <div className="bg-white py-4 px-4 overflow-x-auto">
        <div className="container mx-auto">
          <div className="flex space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                  activeCategory === category 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Food Items */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {activeCategory === "All" ? "All Menu Items" : activeCategory}
          {searchQuery && ` - Search: "${searchQuery}"`}
        </h2>
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  {!item.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold">OUT OF STOCK</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-orange-500 font-bold">KES {item.price}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <FiClock className="mr-1" />
                    <span className="mr-3">{item.prepTime} min</span>
                    <FiStar className="text-yellow-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    {item.category}
                  </div>
                  
                  {item.available ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center justify-center"
                    >
                      <FaMotorcycle className="mr-2" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-200 text-gray-500 px-4 py-2 rounded-full font-medium cursor-not-allowed"
                    >
                      Not Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Drawer - Consistent with primary color scheme */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg border-t border-gray-200 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-gray-800">Your Order ({cart.length})</h3>
              <button onClick={clearCart} className="text-gray-500 hover:text-gray-700">
                <FiX />
              </button>
            </div>
            
            <div className="max-h-40 overflow-y-auto mb-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 text-sm">
                      1
                    </span>
                    <span className="text-gray-800">{item.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4 text-gray-800">KES {item.price}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-800">Total:</span>
              <span className="font-bold text-gray-800">KES {total}</span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full font-bold transition-colors"
            >
              Checkout with M-Pesa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
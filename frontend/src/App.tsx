import { FaPhoneAlt, FaListAlt, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { MdDeliveryDining, MdRestaurant, MdSecurity } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <IoFastFoodOutline className="text-blue-600 text-3xl" />
            <h1 className="text-2xl font-bold text-blue-600">MealMinder</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition">How It Works</a>
            <a href="/restaurants" className="text-gray-700 hover:text-blue-600 font-medium transition">Restaurants</a>
            <a href="/business" className="text-gray-700 hover:text-blue-600 font-medium transition">For Businesses</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition">Log in</a>
            <a 
              href="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              No More Lunchtime Guesswork
            </h1>
            <p className="text-xl mb-8 opacity-90">
              See real-time menus from nearby restaurants, order with one click, 
              and track your utensils - all from your desk or shop.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                Download the App
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition">
                View Restaurants Nearby
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
              alt="Office workers enjoying lunch" 
              className="rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Lunchtime Struggle is Real</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've fixed the frustrating parts of office lunch delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-red-500 flex items-center">
                <FaPhoneAlt className="mr-2" /> The Old Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaListAlt className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Menu Uncertainty</h4>
                    <p className="text-gray-600">Endless calls to check what's available today</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaClock className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Delivery Confusion</h4>
                    <p className="text-gray-600">Restaurants forget where they delivered</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaMoneyBillWave className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Payment Hassles</h4>
                    <p className="text-gray-600">Manual tracking of utensils and payments</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-500 flex items-center">
                <FaMobileAlt className="mr-2" /> The MealMinder Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <MdRestaurant className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Live Menus</h4>
                    <p className="text-gray-600">See exactly what's available right now</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <MdDeliveryDining className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Smart Tracking</h4>
                    <p className="text-gray-600">Automatic delivery location recording</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <MdSecurity className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">Utensil Management</h4>
                    <p className="text-gray-600">Digital tracking of all restaurant items</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How MealMinder Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple solution for office workers and local restaurants
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Real-Time Menus</h3>
              <p className="text-gray-600">
                See exactly what nearby restaurants are serving today without calling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
              <p className="text-gray-600">
                Order for now or schedule for later. Pay securely through the app.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Track & Manage</h3>
              <p className="text-gray-600">
                Get delivery updates and manage utensil returns digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Restaurants Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits for Restaurants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop losing track of deliveries and payments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaListAlt className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Menu Management</h3>
              <p className="text-gray-600">
                Update your available meals in real-time from your phone.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery Tracking</h3>
              <p className="text-gray-600">
                Never forget where you delivered. GPS records every location.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMoneyBillWave className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Utensil Accounting</h3>
              <p className="text-gray-600">
                Digital tracking of all your containers and servingware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Lunch Routine?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join offices and restaurants in your area who are already using MealMinder.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition text-lg">
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <IoFastFoodOutline className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-bold text-white">MealMinder</h3>
            </div>
            <p className="max-w-2xl mx-auto mb-8">
              Solving urban office lunch delivery challenges one meal at a time.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Restaurants</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
            <p>&copy; {new Date().getFullYear()} MealMinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

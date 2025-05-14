import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">CafeteriaX</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Menu</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700">Welcome to CafeteriaX</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Simplifying cafeteria operations with real-time ordering, staff management, and insightful dashboards.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500 border-t mt-10">
        &copy; {new Date().getFullYear()} CafeteriaX. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

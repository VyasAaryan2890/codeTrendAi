import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Trends from "./components/Trends";
import Dashboard from "./components/Dashboard";
import Community from "./components/Community";
import Auth from "./components/Auth";
import "./index.css"; // Tailwind CSS file or your main CSS file

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">
              <Link to="/">CodeTrendAi</Link>
            </h1>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/trends" className="hover:text-gray-300">Trends</Link>
              <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
              <Link to="/community" className="hover:text-gray-300">Community</Link>
              <Link to="/auth" className="hover:text-gray-300">Auth</Link>
            </nav>
            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-700">
              <nav className="flex flex-col items-start space-y-2 p-4">
                <Link to="/" className="hover:text-gray-300 w-full">Home</Link>
                <Link to="/trends" className="hover:text-gray-300 w-full">Trends</Link>
                <Link to="/dashboard" className="hover:text-gray-300 w-full">Dashboard</Link>
                <Link to="/community" className="hover:text-gray-300 w-full">Community</Link>
                <Link to="/auth" className="hover:text-gray-300 w-full">Auth</Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gray-100">
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/community" element={<Community />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

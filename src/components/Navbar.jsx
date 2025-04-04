import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import ecoBottleLogo from '../assets/logo.png'; // Importing the logo image

// Base64 encoded white version of the logo
// const ecoBottleLogo = `src/assets/logo.png`;

const Navbar = ({ cartItems }) => {
  return (
    <nav className="w-full bg-[#FF7F6E] text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo with white text */}
          <Link to="/" className="flex items-center" >
            <img 
              src={ecoBottleLogo} 
              alt="EcoBottle Logo" 
              className="h-10 w-auto" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/path/to/fallback/logo.png";
              }}
            />
            <span className="ml-2 text-xl md:text-2xl font-bold hidden sm:inline-block text-white">
              EcoBottles
            </span>
          </Link>
        </div>

        {/* Navigation Links with white text */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link 
            to="/" 
            className="px-2 py-1 rounded-md hover:bg-white/10 transition-colors duration-200 font-medium text-white"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="px-2 py-1 rounded-md hover:bg-white/10 transition-colors duration-200 font-medium text-white"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="px-2 py-1 rounded-md hover:bg-white/10 transition-colors duration-200 font-medium text-white"
          >
            About
          </Link>
          
          {/* Shopping Cart with white icon */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-white"
          >
            <ShoppingCart className="h-6 w-6 text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#FF7F6E] rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
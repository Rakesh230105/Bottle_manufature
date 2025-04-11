import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Star, ShoppingCart, User } from 'lucide-react';

const Navbar = ({ cartItems, isSubscribed, isLoggedIn, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-[#f88379]" />
            <span className="text-xl font-bold ml-2 text-[#f88379]">EcoBottles</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#f88379] hover:text-[#fa9589] font-medium">Home</Link>
            <Link to="/products" className="text-[#f88379] hover:text-[#fa9589] font-medium">Products</Link>
            <Link to="/exclusive-products" className="text-[#f88379] hover:text-[#fa9589] font-medium flex items-center">
              <Star className="h-4 w-4 mr-1" />
              {isSubscribed ? 'Exclusive Products' : 'Premium Collection'}
            </Link>
            <Link to="/about" className="text-[#f88379] hover:text-[#fa9589] font-medium">About Us</Link>
            <Link 
              to="/subscription" 
              className={`font-medium ${isSubscribed 
                ? 'text-green-500 hover:text-green-600' 
                : 'text-[#f88379] hover:text-[#fa9589]'}`}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Link>
          </div>
          
          {/* Cart, Login and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Login/Account */}
            <div className="mr-4">
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center text-[#f88379] hover:text-[#fa9589]">
                    <User className="h-6 w-6" />
                    <span className="ml-1 hidden lg:inline">{userName || 'Account'}</span>
                  </button>
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50 hidden group-hover:block">
                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF5F4]">
                      My Account
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF5F4]">
                      My Orders
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF5F4]">
                      Settings
                    </Link>
                    <Link to="/logout" className="block px-4 py-2 text-sm text-red-500 hover:bg-[#FFF5F4]">
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="flex items-center text-[#f88379] hover:text-[#fa9589]">
                  <User className="h-6 w-6" />
                  <span className="ml-1 hidden lg:inline">Login</span>
                </Link>
              )}
            </div>
            
            {/* Cart */}
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-[#f88379]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#f88379]" />
              ) : (
                <Menu className="h-6 w-6 text-[#f88379]" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-[#f88379] hover:text-[#fa9589] font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-[#f88379] hover:text-[#fa9589] font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/exclusive-products" 
                className="text-[#f88379] hover:text-[#fa9589] font-medium flex items-center px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star className="h-4 w-4 mr-1" />
                {isSubscribed ? 'Exclusive Products' : 'Premium Collection'}
              </Link>
              <Link 
                to="/about" 
                className="text-[#f88379] hover:text-[#fa9589] font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/subscription" 
                className={`font-medium px-4 py-2 ${isSubscribed 
                  ? 'text-green-500 hover:text-green-600' 
                  : 'text-[#f88379] hover:text-[#fa9589]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </Link>
              <div className="border-t border-gray-200 pt-2">
                {isLoggedIn ? (
                  <>
                    <Link 
                      to="/account" 
                      className="text-[#f88379] hover:text-[#fa9589] font-medium px-4 py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Account
                    </Link>
                    <Link 
                      to="/logout" 
                      className="text-red-500 hover:text-red-600 font-medium px-4 py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link 
                    to="/login" 
                    className="text-[#f88379] hover:text-[#fa9589] font-medium px-4 py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
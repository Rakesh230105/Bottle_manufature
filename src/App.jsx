import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutUsPage from './components/AboutUsPage';
import CartPage from './components/CartPage';
import ExclusiveProductsPage from './components/ExclusiveProductsPage';
import SubscriptionPage from './components/SubscriptionPage';
import PaymentPage from './components/PaymentPage';
import SubscriptionSuccessPage from './components/SubscriptionSuccessPage';
import LoginPage from './components/LoginPage';  // Assuming you'll move LoginPage to components folder
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
    
    // Check if user is subscribed from localStorage
    const subscriptionStatus = localStorage.getItem('isSubscribed') === 'true';
    setIsSubscribed(subscriptionStatus);

    // Check if user is authenticated
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);
      setIsAuthenticated(true);
    }
  }, []);
  
  // Update localStorage when subscription status changes
  useEffect(() => {
    localStorage.setItem('isSubscribed', isSubscribed);
  }, [isSubscribed]);

  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(item => item.id === product.id);
    
    // Apply discount if user is subscribed
    const discountedPrice = isSubscribed ? 
      parseFloat((product.price * 0.8).toFixed(2)) : 
      product.price;
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ 
        ...product, 
        quantity: 1,
        price: discountedPrice
      });
    }
    
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    localStorage.removeItem('userEmail');
  };

  return (
    <Router>
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar 
          cartItems={cartItems} 
          isSubscribed={isSubscribed} 
          isAuthenticated={isAuthenticated}
          userEmail={userEmail}
          onLogout={handleLogout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage isSubscribed={isSubscribed} />} />
            <Route 
              path="/products" 
              element={<ProductsPage addToCart={addToCart} isSubscribed={isSubscribed} />} 
            />
            <Route path="/about" element={<AboutUsPage />} />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  removeFromCart={removeFromCart} 
                  updateQuantity={updateQuantity}
                  isSubscribed={isSubscribed}
                />
              } 
            />
            <Route
              path="/exclusive-products"
              element={
                <ExclusiveProductsPage
                  addToCart={addToCart}
                  isSubscribed={isSubscribed}
                />
              }
            />
            <Route
              path="/subscription"
              element={
                <SubscriptionPage
                  setIsSubscribed={setIsSubscribed}
                  isSubscribed={isSubscribed}
                />
              }
            />
            <Route
              path="/payment"
              element={
                <PaymentPage
                  setIsSubscribed={setIsSubscribed}
                  isAuthenticated={isAuthenticated}
                  userEmail={userEmail}
                />
              }
            />
            <Route
              path="/subscription-success"
              element={<SubscriptionSuccessPage />}
            />
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <LoginPage onLoginSuccess={handleLogin} />
              } 
            />
            <Route 
              path="/signup" 
              element={
                isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <div className="min-h-screen bg-gradient-to-b from-[#FFF5F4] to-white flex items-center justify-center px-4 py-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-8">Sign Up Page</h2>
                    <p className="text-center text-gray-600">Sign up functionality coming soon!</p>
                    <div className="mt-8 text-center">
                      <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-[#FF7F6E] font-medium hover:underline">
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              } 
            />
            <Route 
              path="/forgot-password" 
              element={
                <div className="min-h-screen bg-gradient-to-b from-[#FFF5F4] to-white flex items-center justify-center px-4 py-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-8">Forgot Password</h2>
                    <p className="text-center text-gray-600">Password reset functionality coming soon!</p>
                    <div className="mt-8 text-center">
                      <p className="text-gray-600">
                        Remember your password?{' '}
                        <a href="/login" className="text-[#FF7F6E] font-medium hover:underline">
                          Log in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
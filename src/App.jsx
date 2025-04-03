import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutUsPage from './components/AboutUsPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
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

  return (
    <Router>
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar cartItems={cartItems} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/products" 
              element={<ProductsPage addToCart={addToCart} />} 
            />
            <Route path="/about" element={<AboutUsPage />} />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  removeFromCart={removeFromCart} 
                  updateQuantity={updateQuantity} 
                />
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
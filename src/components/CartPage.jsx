import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex items-center mb-6">
        <Link to="/products" className="flex items-center text-[#f88379] hover:text-[#f88379]">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 flex items-center text-[#f88379]">
        <ShoppingBag className="w-8 h-8 mr-3 text-[#f88379]" />
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 mx-auto text-[#f88379] mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-[#f88379]">Your cart is empty</h2>
          <p className="text-[#f88379] mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="bg-[#f88379] text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#f88379] hover:border hover:border-[#f88379] transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <motion.div 
            className="grid grid-cols-1 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                className="flex flex-col md:flex-row border border-[#f88379] rounded-lg overflow-hidden bg-white"
                variants={itemVariants}
              >
                <div className="md:w-1/4 h-48 md:h-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#f88379]">{item.name}</h3>
                    <p className="text-[#f88379] mb-4">{item.description}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-[#f88379] rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-2 hover:bg-[#f88379] hover:text-white text-[#f88379]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-[#f88379]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-[#f88379] hover:text-white text-[#f88379]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-lg mr-4 text-[#f88379]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#f88379] hover:text-white hover:bg-[#f88379] p-1 rounded-full"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="bg-white p-6 rounded-lg border border-[#f88379]">
            <div className="flex justify-between mb-4">
              <span className="text-[#f88379]">Subtotal</span>
              <span className="font-semibold text-[#f88379]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-[#f88379]">Shipping</span>
              <span className="font-semibold text-[#f88379]">Calculated at checkout</span>
            </div>
            <div className="h-px bg-[#f88379] my-4"></div>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold text-[#f88379]">Total</span>
              <span className="text-lg font-bold text-[#f88379]">${subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-[#f88379] text-white text-center py-3 rounded-md font-medium hover:bg-white hover:text-[#f88379] hover:border hover:border-[#f88379] transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
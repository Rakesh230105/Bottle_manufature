import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, Star } from 'lucide-react';

const SubscriptionSuccessPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-green-500 mb-6"
      >
        <CheckCircle className="w-24 h-24" />
      </motion.div>
      
      <h1 className="text-3xl font-bold mb-4 text-[#f88379] text-center">Subscription Successful!</h1>
      
      <p className="text-lg text-[#f88379] mb-6 text-center max-w-lg">
        Thank you for becoming a subscriber! You now have access to exclusive products and a 20% discount on all purchases.
      </p>
      
      <div className="bg-[#f88379] bg-opacity-10 rounded-lg p-6 mb-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-[#f88379]">Your Benefits:</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-[#f88379]">Access to exclusive premium products</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-[#f88379]">20% discount on all purchases</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-[#f88379]">Free shipping on orders over $50</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-[#f88379]">Early access to new product releases</span>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link 
          to="/exclusive-products"
          className="bg-[#f88379] hover:bg-[#fa9589] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
        >
          <Star className="h-5 w-5 mr-2" />
          View Exclusive Products
        </Link>
        <Link 
          to="/products"
          className="bg-white border border-[#f88379] text-[#f88379] hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionSuccessPage;
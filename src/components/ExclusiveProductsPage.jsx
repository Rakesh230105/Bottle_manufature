import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Lock } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const ExclusiveProductsPage = ({ addToCart, isSubscribed }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Redirect to subscription page if not subscribed
  if (!isSubscribed) {
    return (
      <div className="container mx-auto px-4 py-16 bg-white min-h-screen flex flex-col items-center justify-center">
        <Lock className="w-16 h-16 text-[#f88379] mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-[#f88379] text-center">Exclusive Products</h1>
        <p className="text-lg text-[#f88379] mb-6 text-center">These products are only available for our subscribers.</p>
        <button
          onClick={() => window.location.href = '/subscription'}
          className="bg-[#f88379] hover:bg-[#fa9589] text-white px-6 py-3 rounded-lg font-medium"
        >
          Subscribe Now
        </button>
      </div>
    );
  }

  // Exclusive products data
  const exclusiveProducts = [
    {
      id: 101,
      name: "Premium Titanium Bottle",
      price: 89.99,
      discountedPrice: 71.99,
      category: "premium",
      image: "/api/placeholder/300/300",
      description: "Luxury titanium water bottle with exceptional temperature retention. Lifetime warranty included.",
      capacity: "950ml",
      features: ["Titanium", "Lifetime warranty", "48hr insulation"]
    },
    {
      id: 102,
      name: "Limited Edition Artist Series",
      price: 54.99,
      discountedPrice: 43.99,
      category: "special",
      image: "/api/placeholder/300/300",
      description: "Exclusive artist collaboration bottle featuring unique artwork. Only available to subscribers.",
      capacity: "750ml",
      features: ["Limited edition", "Artist collaboration", "Numbered series"]
    },
    {
      id: 103,
      name: "Ultra Performance Hydration Bottle",
      price: 64.99,
      discountedPrice: 51.99,
      category: "premium",
      image: "/api/placeholder/300/300",
      description: "Professional-grade hydration bottle with advanced filtration and hydration tracking.",
      capacity: "800ml",
      features: ["Built-in filter", "Hydration tracking", "Anti-microbial"]
    },
    {
      id: 104,
      name: "Personalized Custom Engraved Bottle",
      price: 49.99,
      discountedPrice: 39.99,
      category: "custom",
      image: "/api/placeholder/300/300",
      description: "Custom engraved bottle with your name or message. Perfect for gifts or personal use.",
      capacity: "700ml",
      features: ["Custom engraving", "Gift packaging", "Premium materials"]
    }
  ];

  // Handle add to cart with notification
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    setShowNotification(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      {/* Top section with title and subscriber badge */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[#f88379]">Exclusive Products</h1>
        <div className="bg-[#f88379] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          Subscriber Only
        </div>
        <p className="text-center text-[#f88379] max-w-2xl">
          These premium products are exclusively available to our subscribers at a 20% discount. 
          Enjoy the privilege of owning these specially curated bottles.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {exclusiveProducts.map(product => (
          <motion.div
            key={product.id}
            className="border border-[#f88379] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="h-48 w-full relative flex items-center justify-center bg-gray-50 p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-40 w-auto object-contain mx-auto" 
              />
              <div className="absolute top-2 right-2 bg-[#f88379] text-white text-xs px-2 py-1 rounded">
                20% OFF
              </div>
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-1 text-[#f88379]">{product.name}</h3>
              <p className="text-[#f88379] text-sm mb-2">{product.capacity} • {product.category}</p>
              <div className="flex flex-wrap mb-3">
                {product.features.map((feature, index) => (
                  <span 
                    key={index} 
                    className="bg-[#f88379] text-white text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <p className="text-[#f88379] text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-[#f88379]">${product.discountedPrice}</span>
                  <span className="text-sm line-through ml-2 text-gray-400">${product.price}</span>
                </div>
                <button
                  className="bg-[#f88379] hover:bg-[#fa9589] text-white px-3 py-1 rounded-lg flex items-center"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Add to cart notification */}
      {showNotification && addedProduct && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-[#f88379] text-white px-4 py-3 rounded-lg shadow-lg flex items-center"
        >
          <Check className="h-5 w-5 mr-2 text-white" />
          <span className="text-white">{addedProduct.name} added to cart!</span>
        </motion.div>
      )}
    </div>
  );
};

export default ExclusiveProductsPage;
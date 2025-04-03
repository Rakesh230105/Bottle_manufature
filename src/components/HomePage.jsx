import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplet, Recycle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Color definitions
  const colors = {
    coral: {
      50: '#FFF5F4',
      100: '#FFE8E5',
      200: '#FFD1CC',
      500: '#FF7F6E',
      600: '#FF5E48'
    },
    gray: {
      600: '#4B5563',
      800: '#1F2937'
    }
  };

  // Sorted product data
  const products = [
    {
      name: "Adventure Glass",
      price: "$29.99",
      image: "https://pipalhome.com/cdn/shop/files/pipal-jade-insulated-bottle-green-PFGVW0020-AQU-06.heic?v=1710482690&width=1780",
      description: "Durable recycled glass bottle with silicone protection.",
      rating: 4.7
    },
    {
      name: "Classic Bamboo",
      price: "$34.99",
      image: "https://rishabhplast.com/wp-content/uploads/2023/03/Steelo-Classic-1.jpg",
      description: "Our signature bamboo bottle with stainless steel interior.",
      rating: 4.9
    },
    {
      name: "Sport Series",
      price: "$24.99",
      image: "https://scssports.in/cdn/shop/files/51eJjP5U5QL._SX679_535x.jpg?v=1725867240",
      description: "Lightweight, insulated bottle for your active lifestyle.",
      rating: 4.5
    }
  ];

  // Sort products by price (highest to lowest)
  const sortedProducts = [...products].sort((a, b) => 
    parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
  );

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      testimonial: "I've been using my EcoBottle for over a year now and it still looks brand new. The insulation is amazing - my coffee stays hot for hours!",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      testimonial: "As someone who hikes frequently, the durability of these bottles is impressive. Plus, I love knowing I'm reducing my plastic footprint.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      name: "Emma Davis",
      testimonial: "My kids love their EcoBottles for school. They're durable enough to survive being dropped and the designs are super cute!",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    }
  ];

  // Render star ratings
  const renderRating = (rating) => {
    return (
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800 w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Users/mulpurirakesh/Desktop/bottle/ECO BOTTLE.png" 
            alt="Eco-friendly bottles" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sustainable Bottles for a <span className="text-[#FF7F6E] relative">
                Sustainable Future
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF7F6E]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-xl">
              Discover our collection of eco-friendly bottles designed to reduce plastic waste and promote sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF7F6E] text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-[#FF5E48] transition-all duration-300 w-full sm:w-auto"
                >
                  Shop Now <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#FF7F6E] text-[#FF7F6E] px-8 py-4 rounded-lg font-medium shadow-md hover:bg-[#FFE8E5] transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="w-32 h-32 rounded-full bg-[#FFE8E5]"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.span variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-[#FFE8E5] text-[#FF7F6E] font-medium mb-3">
              Our Features
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Eco-Friendly Bottles?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our bottles are designed with both you and the planet in mind, offering sustainable solutions without compromising on quality.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[#FF7F6E] hover:shadow-xl transition-shadow group">
              <div className="bg-[#FFE8E5] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD1CC] transition-colors">
                <Leaf className="text-[#FF7F6E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Materials</h3>
              <p className="text-gray-600">
                Made from sustainable materials like bamboo, recycled glass, and BPA-free plastics that are safe for you and the environment.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[#FF7F6E] hover:shadow-xl transition-shadow group">
              <div className="bg-[#FFE8E5] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD1CC] transition-colors">
                <Droplet className="text-[#FF7F6E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Temperature Control</h3>
              <p className="text-gray-600">
                Advanced insulation technology keeps your beverages at the perfect temperature for hours, hot or cold.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[#FF7F6E] hover:shadow-xl transition-shadow group">
              <div className="bg-[#FFE8E5] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFD1CC] transition-colors">
                <Recycle className="text-[#FF7F6E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Recyclable</h3>
              <p className="text-gray-600">
                When it's time to replace your bottle, you can recycle it completely, ensuring zero waste.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 w-full bg-[#FFF5F4]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white text-[#FF7F6E] font-medium mb-3">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular eco-friendly bottles, designed for different needs and lifestyles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[#FF7F6E] font-bold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    {renderRating(product.rating)}
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to="/products" className="block w-full">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#FF7F6E] text-white py-3 rounded-lg font-medium hover:bg-[#FF5E48] transition-colors flex items-center justify-center gap-2"
                    >
                      View Details <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF7F6E] px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto hover:bg-[#FFD1CC] transition-colors shadow-md"
              >
                View All Products <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 w-full bg-gradient-to-b from-[#FFE8E5] to-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white text-[#FF7F6E] font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from people who have made the switch to our eco-friendly bottles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FFE8E5]">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <span className="text-[#FFD1CC] text-6xl absolute -top-4 left-0">"</span>
                  <p className="text-gray-600 italic pt-2 pl-6">{testimonial.testimonial}</p>
                  <span className="text-[#FFD1CC] text-6xl absolute bottom-0 right-0">"</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/testimonials">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF7F6E] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto hover:bg-[#FF5E48] transition-colors shadow-md"
              >
                Read More Reviews <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 md:py-20 w-full bg-white">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FFF5F4] rounded-2xl p-8 md:p-12 shadow-lg text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for eco-friendly tips, exclusive offers, and updates on new sustainable products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF7F6E] focus:ring-2 focus:ring-[#FFE8E5]"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF7F6E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF5E48] transition-colors sm:flex-shrink-0"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter, Search, Check } from 'lucide-react';

const ProductsPage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showNotification, setShowNotification] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Product data
  const products = [
    {
      id: 1,
      name: "Classic Bamboo Water Bottle",
      price: 34.99,
      category: "bamboo",
      image: "https://rishabhplast.com/wp-content/uploads/2023/03/Steelo-Classic-1.jpg",
      description: "Our signature bamboo bottle with stainless steel interior. Perfect for everyday use with 24-hour temperature control.",
      capacity: "750ml",
      features: ["BPA-free", "Leak-proof", "24hr insulation"]
    },
    {
      id: 2,
      name: "Adventure Glass Bottle",
      price: 29.99,
      category: "glass",
      image: "https://pipalhome.com/cdn/shop/files/pipal-jade-insulated-bottle-green-PFGVW0020-AQU-06.heic?v=1710482690&width=1780",
      description: "Durable recycled glass bottle with silicone protection sleeve. Ideal for home and office use.",
      capacity: "600ml",
      features: ["Recycled glass", "Dishwasher safe", "Silicone sleeve"]
    },
    {
      id: 3,
      name: "Sport Active Bottle",
      price: 24.99,
      category: "sport",
      image: "https://scssports.in/cdn/shop/files/51eJjP5U5QL._SX679_535x.jpg?v=1725867240",
      description: "Lightweight, insulated bottle for your active lifestyle. Features quick-flow spout for hydration on the go.",
      capacity: "500ml",
      features: ["Lightweight", "Quick-flow spout", "18hr insulation"]
    },
    {
      id: 4,
      name: "Kids Eco Bottle",
      price: 19.99,
      category: "kids",
      image: "https://www.ipshopy.com/image/cache/catalog/Uploaded%20Data/Shital/Jolly%20375/Milton%20Jolly%20375%20thermosteel%20kids%20Hot%20and%20Cold%20water%20bottle,%20300%20ml,%20Ivory%201-1000x1000.jpg",
      description: "Fun and colorful bottle designed for children. Durable construction with easy-to-use flip cap.",
      capacity: "350ml",
      features: ["Kid-friendly", "Drop-resistant", "Easy clean"]
    },
    {
      id: 5,
      name: "Stainless Steel Thermal Flask",
      price: 39.99,
      category: "stainless",
      image: "https://nanonine.in/cdn/shop/products/T-Cafe-6.jpg?v=1653563179",
      description: "Premium thermal flask with double-wall vacuum insulation. Keeps drinks hot for 12 hours or cold for 24 hours.",
      capacity: "1L",
      features: ["Double-wall vacuum", "Premium finish", "Wide mouth"]
    },
    {
      id: 6,
      name: "Coffee Travel Mug",
      price: 27.99,
      category: "coffee",
      image: "https://m.media-amazon.com/images/I/71extV0xTFL.jpg",
      description: "Spill-proof travel mug for coffee lovers. Designed with a leak-proof lid and comfortable grip.",
      capacity: "450ml",
      features: ["Spill-proof", "One-handed operation", "Fits cup holders"]
    },
    {
      id: 7,
      name: "Collapsible Silicone Bottle",
      price: 22.99,
      category: "silicone",
      image: "https://m.media-amazon.com/images/I/61E4miwcKSL.jpg",
      description: "Space-saving collapsible bottle made from food-grade silicone. Perfect for travel and hiking.",
      capacity: "500ml",
      features: ["Collapsible", "Freezer-safe", "Carabiner included"]
    },
    {
      id: 8,
      name: "Infuser Water Bottle",
      price: 26.99,
      category: "infuser",
      image: "https://www.bigbasket.com/media/uploads/p/l/40114015_1-steelo-sante-infuser-water-bottle-green.jpg",
      description: "Bottle with removable infuser basket for fruit-infused water. Create your own flavored beverages naturally.",
      capacity: "800ml",
      features: ["Fruit infuser", "BPA-free", "Easy-grip design"]
    },
    {
      id: 9,
      name: "Copper Ayurvedic Bottle",
      price: 45.99,
      category: "specialty",
      image: "https://www.jiomart.com/images/product/original/rv8t7bbqvr/orenda-india-ayurvedic-copper-water-bottle-tibetan-prayer-copper-is-known-to-be-oligo-dynamic-in-nature-product-images-orv8t7bbqvr-p605664220-0-202310191321.jpg?im=Resize=(420,420)",
      description: "Traditional copper water bottle based on Ayurvedic principles. Naturally antimicrobial with health benefits.",
      capacity: "950ml",
      features: ["Pure copper", "Ayurvedic", "Naturally antimicrobial"]
    },
    {
      id: 10,
      name: "Insulated Bike Bottle",
      price: 32.99,
      category: "sport",
      image: "https://www.mangostationery.com/cdn/shop/files/1873101071_650x650.jpg?v=1728368391",
      description: "Cycling-specific water bottle with insulation and ergonomic design for easy access while riding.",
      capacity: "710ml",
      features: ["Bike cage compatible", "Quick-flow valve", "No-slip grip"]
    },
    {
      id: 11,
      name: "Ceramic Eco Bottle",
      price: 36.99,
      category: "ceramic",
      image: "https://mitticool.com/wp-content/uploads/2021/02/1.5-1-1-450x450-PhotoRoom.png-PhotoRoom.png",
      description: "Elegant ceramic bottle with cork lid. Perfect for home or office use with a natural aesthetic.",
      capacity: "500ml",
      features: ["Natural ceramic", "Cork lid", "Plastic-free"]
    },
    {
      id: 12,
      name: "Ultra-Light Hiking Bottle",
      price: 28.99,
      category: "sport",
      image: "https://www.outdoortravelgear.com/cdn/shop/files/hydrapak-hydration-packs-1l-tahoe-blue-flux-ultra-light-flexible-bottle-30822703071304.jpg?v=1730669124",
      description: "Ultralight bottle for hikers and backpackers who count every ounce. Durable despite its minimal weight.",
      capacity: "650ml",
      features: ["Ultra-lightweight", "Durable", "Carabiner clip"]
    },
    {
      id: 13,
      name: "Digital Smart Bottle",
      price: 59.99,
      category: "tech",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/312588518/AT/CQ/BS/186840096/51-sf-f6svl-sl1000--500x500.jpg",
      description: "Smart bottle with temperature display and hydration tracking. Syncs with your smartphone for personalized reminders.",
      capacity: "600ml",
      features: ["Temperature display", "Hydration tracking", "App connectivity"]
    },
    {
      id: 14,
      name: "Cold Brew Coffee Bottle",
      price: 34.99,
      category: "coffee",
      image: "https://img.tatacliq.com/images/i7/658Wx734H/MP000000010794024_658Wx734H_202110020632561.jpeg",
      description: "Specialized bottle with integrated filter for making cold brew coffee on the go. Perfect for coffee enthusiasts.",
      capacity: "750ml",
      features: ["Built-in filter", "Leak-proof", "Easy cleaning"]
    },
    {
      id: 15,
      name: "Wooden Thermos Flask",
      price: 49.99,
      category: "specialty",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/AU/EP/TO/132022679/product-jpeg.jpg",
      description: "Unique thermos with natural wood exterior and stainless steel interior. Combines aesthetics with functionality.",
      capacity: "500ml",
      features: ["Natural wood", "Double-wall vacuum", "Premium design"]
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bamboo', name: 'Bamboo' },
    { id: 'glass', name: 'Glass' },
    { id: 'sport', name: 'Sport' },
    { id: 'stainless', name: 'Stainless Steel' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'specialty', name: 'Specialty' }
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

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
      {/* Top section with title, search, and filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 text-[#f88379]">Water Bottles</h1>

        {/* Search bar */}
        <div className="relative w-full md:w-64 mb-4 md:mb-0">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#f88379]" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-[#f88379] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f88379] text-[#f88379] bg-white placeholder-[#f88379]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Section - Updated with soft coral background and white text */}
      <div className="w-full flex flex-col items-center md:items-start mb-6">
        <div className="flex items-center space-x-2 text-[#f88379] mb-3">
          <Filter className="h-5 w-5 text-[#f88379]" />
          <span className="font-medium text-lg">Filter by:</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                activeFilter === category.id 
                  ? 'bg-[#f88379] text-white' 
                  : 'bg-[#f88379] text-white hover:bg-[#fa9589] hover:text-white'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="border border-[#f88379] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full  object-contain"
              />
            </div>
            <div className="p-4">
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
                <span className="text-lg font-bold text-[#f88379]">${product.price}</span>
                <button
                  className="bg-[#f88379] hover:bg-[#fa9589] text-white px-3 py-1 rounded-lg flex items-center"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredProducts.map(product => (
    <motion.div
      key={product.id}
      className="border border-[#f88379] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Image container with improved display */}
      <div className="h-48 w-full relative flex items-center justify-center bg-gray-50 p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-40 w-auto object-contain mx-auto" 
        />
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
          <span className="text-lg font-bold text-[#f88379]">${product.price}</span>
          <button
            className="bg-[#f88379] hover:bg-[#fa9589] text-white px-3 py-1 rounded-lg flex items-center"
            onClick={() => handleAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      
      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-[#f88379]">No products found</h3>
          <p className="text-[#f88379] mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
      
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

export default ProductsPage;
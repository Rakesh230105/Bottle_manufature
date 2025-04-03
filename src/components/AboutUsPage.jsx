import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Globe, Heart, Calendar, Award } from 'lucide-react';

const AboutUsPage = () => {
  // Coral color defined as a custom color
  const coral = {
    500: '#FF7F6E',
    100: '#FFE8E5',
    200: '#FFD1CC'
  };

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

  return (
    <div className="bg-white text-gray-800 w-full">
      {/* Hero Section - Full width with coral accent */}
      <section className="relative py-24 md:py-32 w-full bg-gradient-to-r from-coral-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-coral-500">Mission</span> to Reduce Plastic Waste
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Founded in 2020, EcoBottles is committed to creating sustainable alternatives to single-use plastics through innovative design and eco-conscious materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Full width with white background */}
      <section className="py-16 md:py-24 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12 md:mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Our Story
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              What started as a small idea between friends has grown into a movement to change how people consume beverages sustainably.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Team working" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-coral-500">From Passion to Purpose</h3>
              <p className="text-gray-600 mb-4 text-lg">
                After witnessing the devastating effects of plastic pollution during a beach cleanup, our founders set out to create a better alternative to disposable water bottles.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                We spent two years researching materials and testing designs before launching our first product - the Classic Bamboo bottle that remains our best-seller today.
              </p>
              <p className="text-gray-600 text-lg">
                Now with a team of 25 passionate individuals, we're expanding our product line while staying true to our core values of sustainability and quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Full width with coral accent background */}
      <section className="py-16 md:py-24 w-full bg-coral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12 md:mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              These principles guide every decision we make at EcoBottles
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-coral-500">
              <div className="bg-coral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-coral-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability First</h3>
              <p className="text-gray-600">
                Every material and process is evaluated based on its environmental impact before we consider cost or convenience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-coral-500">
              <div className="bg-coral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-coral-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We partner with local organizations and schools to promote environmental education and clean-up initiatives.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-coral-500">
              <div className="bg-coral-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="text-coral-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Responsibility</h3>
              <p className="text-gray-600">
                1% of all sales go to environmental nonprofits working to combat plastic pollution worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Full width with white background */}
      <section className="py-16 md:py-24 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              The passionate individuals behind EcoBottles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "Environmental engineer turned entrepreneur"
              },
              {
                name: "Jamie Smith",
                role: "Product Designer",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Specializes in sustainable materials"
              },
              {
                name: "Taylor Chen",
                role: "Operations",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
                bio: "Ensures ethical supply chains"
              },
              {
                name: "Jordan Lee",
                role: "Community Outreach",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                bio: "Connects us with local initiatives"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-coral-500 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section - Full width with coral gradient */}
      <section className="py-16 md:py-24 w-full bg-gradient-to-br from-coral-100 to-coral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Milestones</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              Key moments in our journey toward sustainability
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-coral-300 transform -translate-x-1/2"></div>
            
            {[
              {
                year: "2020",
                title: "Company Founded",
                description: "Launched with our first bamboo bottle design",
                icon: <Heart className="text-coral-500" size={20} />
              },
              {
                year: "2021",
                title: "10,000 Bottles Sold",
                description: "Reached our first major sales milestone",
                icon: <Award className="text-coral-500" size={20} />
              },
              {
                year: "2022",
                title: "Expanded Product Line",
                description: "Added glass and BPA-free plastic options",
                icon: <Leaf className="text-coral-500" size={20} />
              },
              {
                year: "2023",
                title: "Carbon Neutral Certified",
                description: "Achieved net-zero carbon footprint",
                icon: <Globe className="text-coral-500" size={20} />
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg relative">
                  <div className="absolute -top-3 -left-3 bg-coral-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 ml-8">{milestone.title}</h3>
                  <p className="text-gray-600 ml-8">{milestone.description}</p>
                  <div className="absolute top-6 hidden md:block -right-6 w-6 h-6 bg-coral-500 rounded-full transform translate-x-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Full width with coral background */}
      <section className="py-16 md:py-24 w-full bg-coral-500 text-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Every EcoBottle purchase helps reduce plastic waste and supports environmental initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-coral-500 px-8 py-3 rounded-lg font-medium shadow-md"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-coral px-8 py-3 rounded-lg font-medium shadow-md"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
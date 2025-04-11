import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Award, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = ({ setIsSubscribed, isSubscribed }) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  
  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: 9.99,
      billingCycle: 'per month',
      features: [
        'Access to exclusive products',
        '20% discount on all purchases',
        'Free shipping on orders over $50',
        'Early access to new releases'
      ]
    },
    {
      id: 'annual',
      name: 'Annual',
      price: 99.99,
      billingCycle: 'per year',
      savings: 'Save $19.89',
      features: [
        'All Monthly plan benefits',
        'Free shipping on all orders',
        'One free product per year',
        'Exclusive seasonal gifts'
      ],
      recommended: true
    }
  ];
  
  const handleSubscribe = () => {
    // Navigate to payment page with selected plan
    navigate('/payment', { state: { selectedPlan } });
  };
  
  if (isSubscribed) {
    return (
      <div className="container mx-auto px-4 py-16 bg-white min-h-screen flex flex-col items-center justify-center">
        <Award className="w-16 h-16 text-[#f88379] mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-[#f88379] text-center">You're a Subscriber!</h1>
        <p className="text-lg text-[#f88379] mb-6 text-center">
          Thank you for being a valued subscriber. Enjoy your exclusive access and discounts.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/exclusive-products')}
            className="bg-[#f88379] hover:bg-[#fa9589] text-white px-6 py-3 rounded-lg font-medium"
          >
            Shop Exclusive Products
          </button>
          <button
            onClick={() => navigate('/products')}
            className="bg-white border border-[#f88379] text-[#f88379] hover:bg-gray-50 px-6 py-3 rounded-lg font-medium"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      {/* Top section with title */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-[#f88379] text-center">Become a Subscriber</h1>
        <p className="text-center text-[#f88379] max-w-2xl">
          Join our subscription program to unlock exclusive products, discounts, and benefits.
          Our subscribers enjoy premium access to our finest water bottles.
        </p>
      </div>

      {/* Subscription plans */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {plans.map(plan => (
          <motion.div
            key={plan.id}
            className={`border rounded-lg p-6 flex flex-col ${
              plan.recommended 
                ? 'border-[#f88379] shadow-md' 
                : 'border-gray-200'
            }`}
            whileHover={{ y: -5 }}
          >
            {plan.recommended && (
              <div className="bg-[#f88379] text-white text-xs px-3 py-1 rounded-full self-start mb-2">
                RECOMMENDED
              </div>
            )}
            <h2 className="text-2xl font-bold text-[#f88379] mb-2">{plan.name}</h2>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-[#f88379]">${plan.price}</span>
              <span className="text-sm text-[#f88379] ml-1">{plan.billingCycle}</span>
            </div>
            {plan.savings && (
              <div className="bg-[#f88379] bg-opacity-10 text-white text-sm px-3 py-1 rounded self-start mb-4">
                {plan.savings}
              </div>
            )}
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start mb-3">
                  <Check className="h-5 w-5 text-[#f88379] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#f88379]">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-medium ${
                selectedPlan === plan.id
                  ? 'bg-[#f88379] text-white'
                  : 'bg-white border border-[#f88379] text-[#f88379] hover:bg-gray-50'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>

      {/* Benefits section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-[#f88379] mb-6 text-center">Subscriber Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="flex justify-center mb-3">
              <Star className="h-10 w-10 text-[#f88379]" />
            </div>
            <h3 className="text-lg font-medium text-[#f88379] mb-2">Exclusive Products</h3>
            <p className="text-sm text-[#f88379]">
              Access to premium water bottles that are only available to subscribers.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="flex justify-center mb-3">
              <Gift className="h-10 w-10 text-[#f88379]" />
            </div>
            <h3 className="text-lg font-medium text-[#f88379] mb-2">20% Discount</h3>
            <p className="text-sm text-[#f88379]">
              Enjoy 20% off on all products, including our regular collection.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="flex justify-center mb-3">
              <Award className="h-10 w-10 text-[#f88379]" />
            </div>
            <h3 className="text-lg font-medium text-[#f88379] mb-2">Priority Support</h3>
            <p className="text-sm text-[#f88379]">
              Get priority customer service and exclusive subscriber-only events.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe button */}
      <div className="max-w-4xl mx-auto flex justify-center">
        <button
          className="bg-[#f88379] hover:bg-[#fa9589] text-white px-8 py-4 rounded-lg font-medium text-lg"
          onClick={handleSubscribe}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;
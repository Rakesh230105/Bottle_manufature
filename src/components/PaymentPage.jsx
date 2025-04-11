import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard, Lock, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ setIsSubscribed, selectedPlan }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  // Plans information to display summary
  const plans = {
    monthly: {
      name: 'Monthly Subscription',
      price: 9.99,
      cycle: 'monthly'
    },
    annual: {
      name: 'Annual Subscription',
      price: 99.99,
      cycle: 'annual'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Use format MM/YY';
    }
    
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3-4 digits';
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsSubscribed(true);
        navigate('/subscription-success');
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#f88379]">Complete Your Subscription</h1>
        
        {/* Order Summary */}
        <div className="bg-[#f88379] bg-opacity-10 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-[#f88379]">Order Summary</h2>
          <div className="flex justify-between items-center pb-3 border-b border-[#f88379] border-opacity-20">
            <div>
              <p className="font-medium text-[#f88379]">{plans[selectedPlan]?.name || 'Subscription'}</p>
              <p className="text-sm text-[#f88379] opacity-80">Billed {plans[selectedPlan]?.cycle || 'regularly'}</p>
            </div>
            <p className="font-bold text-[#f88379]">${plans[selectedPlan]?.price.toFixed(2) || '9.99'}</p>
          </div>
          <div className="flex justify-between items-center pt-3">
            <p className="font-medium text-[#f88379]">Total</p>
            <p className="font-bold text-[#f88379]">${plans[selectedPlan]?.price.toFixed(2) || '9.99'}</p>
          </div>
        </div>
        
        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-6">
              <Lock className="h-5 w-5 text-[#f88379] mr-2" />
              <h2 className="text-xl font-semibold text-[#f88379]">Secure Payment</h2>
            </div>
            
            {/* Card Name */}
            <div className="mb-4">
              <label className="block text-[#f88379] text-sm font-medium mb-2">
                Cardholder Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-[#f88379]" />
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.cardName ? 'border-red-500 focus:ring-red-200' : 'border-[#f88379] focus:ring-[#f88379] focus:ring-opacity-50'
                  }`}
                  placeholder="Name on card"
                />
              </div>
              {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
            </div>
            
            {/* Card Number */}
            <div className="mb-4">
              <label className="block text-[#f88379] text-sm font-medium mb-2">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-[#f88379]" />
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.cardNumber ? 'border-red-500 focus:ring-red-200' : 'border-[#f88379] focus:ring-[#f88379] focus:ring-opacity-50'
                  }`}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>
            
            {/* Flex row for expiry, CVV, and zip */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Expiry Date */}
              <div className="md:w-1/3">
                <label className="block text-[#f88379] text-sm font-medium mb-2">
                  Expiry Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#f88379]" />
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.expiryDate ? 'border-red-500 focus:ring-red-200' : 'border-[#f88379] focus:ring-[#f88379] focus:ring-opacity-50'
                    }`}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>
                {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
              </div>
              
              {/* CVV */}
              <div className="md:w-1/3">
                <label className="block text-[#f88379] text-sm font-medium mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.cvv ? 'border-red-500 focus:ring-red-200' : 'border-[#f88379] focus:ring-[#f88379] focus:ring-opacity-50'
                  }`}
                  placeholder="123"
                  maxLength="4"
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
              </div>
              
              {/* ZIP Code */}
              <div className="md:w-1/3">
                <label className="block text-[#f88379] text-sm font-medium mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.zipCode ? 'border-red-500 focus:ring-red-200' : 'border-[#f88379] focus:ring-[#f88379] focus:ring-opacity-50'
                  }`}
                  placeholder="12345"
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#f88379] hover:bg-[#fa9589] text-white py-3 rounded-lg font-medium flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>Complete Payment</>
              )}
            </button>
          </form>
        </div>
        
        {/* Security Note */}
        <div className="text-center text-sm text-[#f88379]">
          <p className="flex items-center justify-center">
            <Lock className="h-4 w-4 mr-1" />
            All payments are secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
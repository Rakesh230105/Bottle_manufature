import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f88379] text-white p-6 mt-auto w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">EcoBottles</h3>
            <p>Sustainable solutions for a better planet</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p>Email: EcoBottle@gmail.com</p>
            <p>Phone: +91 9848254165</p>
          </div>
        </div>
        <div className="mt-4 text-center border-t border-white pt-4">
          <p>&copy; {new Date().getFullYear()} EcoBottles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
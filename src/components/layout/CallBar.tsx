"use client";

import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-3 shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
        <div className="flex items-center">
          <FaPhone className="mr-2 animate-pulse" />
          <span className="font-medium">Call to make an appointment</span>
        </div>
        <a 
          href="tel:0720123123" 
          className="hidden md:flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors"
        >
          <FaPhone className="mr-2" />
          0720.123.123
        </a>
      </div>
    </div>
  );
};

export default CallBar;

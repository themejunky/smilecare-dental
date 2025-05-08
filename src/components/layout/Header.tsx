"use client";

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-red-700 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>0720.123.123</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Strada Maria Rosetti 26A, București</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-red-200 transition-colors">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" className="hover:text-red-200 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" className="hover:text-red-200 transition-colors">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-700 mb-4 md:mb-0">
            <Link href="/">
              SmileCare<span className="text-red-500">Dental</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-1 md:space-x-6">
            <Link href="#services" className="px-3 py-2 text-red-700 hover:text-red-500 font-medium">
              Services
            </Link>
            <Link href="#pricing" className="px-3 py-2 text-red-700 hover:text-red-500 font-medium">
              Pricing
            </Link>
            <Link href="#testimonials" className="px-3 py-2 text-red-700 hover:text-red-500 font-medium">
              Testimonials
            </Link>
            <Link href="#location" className="px-3 py-2 text-red-700 hover:text-red-500 font-medium">
              Location
            </Link>
            <Link href="#contact" className="px-3 py-2 text-red-700 hover:text-red-500 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

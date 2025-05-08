"use client";

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-red-200" />
                <span>0720.123.123</span>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-red-200" />
                <span>info@smilecare.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-200" />
                <span>Strada Maria Rosetti 26A, București 020487</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaClock className="mt-1 mr-3 text-red-200" />
                <div>
                  <p>Monday - Friday: 9:00 - 18:00</p>
                  <p>Saturday: 9:00 - 14:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-red-200 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-red-200 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-red-200 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-red-200 transition-colors">
                  Find Us
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-red-200 transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-red-200 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-red-200 transition-colors">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

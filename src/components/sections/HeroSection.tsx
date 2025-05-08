"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the AppointmentForm component
const AppointmentForm = dynamic(() => import('@/components/forms/AppointmentForm'));

const HeroSection = () => {
  return (
    <section className="relative bg-red-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              Your Family Deserves The Best Dental Care
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We provide comprehensive dental services for your entire family in a comfortable, 
              friendly environment. Our team of experienced professionals is dedicated to your 
              oral health and beautiful smiles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="tel:0720123123" 
                className="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-50 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
          
          {/* Appointment Form */}
          <div className="order-1 md:order-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
              Book Your Appointment
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-red-900 opacity-5 -skew-y-3 transform origin-bottom-right z-0"></div>
    </section>
  );
};

export default HeroSection;

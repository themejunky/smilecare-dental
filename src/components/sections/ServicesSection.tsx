"use client";

import React from 'react';
import Image from 'next/image';
import { FaTooth, FaSmile, FaChild, FaTeeth } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including check-ups, cleanings, fillings, and preventive treatments to maintain your oral health.',
    icon: <FaTooth className="text-4xl text-red-500 mb-4" />,
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic treatments for a beautiful, confident smile.',
    icon: <FaSmile className="text-4xl text-red-500 mb-4" />,
  },
  {
    id: 3,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, comfortable environment to establish good oral health habits early.',
    icon: <FaChild className="text-4xl text-red-500 mb-4" />,
  },
  {
    id: 4,
    title: 'Orthodontics',
    description: 'Correct misaligned teeth and jaws with braces, clear aligners, and other orthodontic treatments for a functional, beautiful smile.',
    icon: <FaTeeth className="text-4xl text-red-500 mb-4" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">Our Dental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental care for your entire family with a focus on comfort, 
            quality, and the latest dental technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-red-700 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-red-700 mb-4">Why Choose SmileCare Dental?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                <span className="text-[#222222]">Experienced team of dental professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                <span className="text-[#222222]">State-of-the-art equipment and facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                <span className="text-[#222222]">Comfortable and relaxing environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                <span className="text-[#222222]">Personalized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✓</span>
                <span className="text-[#222222]">Affordable pricing and flexible payment options</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/img/jonathan-borba-v_2FRXEba94-unsplash.jpg" 
              alt="Dental Clinic" 
              width={800}
              height={600}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

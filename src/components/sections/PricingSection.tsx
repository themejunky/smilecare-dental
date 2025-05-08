"use client";

import React from 'react';

const pricingData = [
  {
    category: 'Preventive Care',
    services: [
      { name: 'Dental Examination', price: '150 RON' },
      { name: 'Professional Cleaning', price: '250 RON' },
      { name: 'Dental X-Rays (Full Set)', price: '200 RON' },
      { name: 'Fluoride Treatment', price: '120 RON' },
    ],
  },
  {
    category: 'Restorative Treatments',
    services: [
      { name: 'Composite Filling', price: '300-450 RON' },
      { name: 'Root Canal Treatment', price: '800-1200 RON' },
      { name: 'Dental Crown', price: '1500-2000 RON' },
      { name: 'Tooth Extraction', price: '250-500 RON' },
    ],
  },
  {
    category: 'Cosmetic Dentistry',
    services: [
      { name: 'Teeth Whitening', price: '1000 RON' },
      { name: 'Dental Veneers (per tooth)', price: '1800 RON' },
      { name: 'Dental Bonding', price: '500 RON' },
      { name: 'Smile Makeover', price: 'From 5000 RON' },
    ],
  },
  {
    category: 'Orthodontics',
    services: [
      { name: 'Traditional Braces', price: 'From 4500 RON' },
      { name: 'Clear Aligners', price: 'From 6000 RON' },
      { name: 'Retainers', price: '800 RON' },
      { name: 'Orthodontic Consultation', price: '200 RON' },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in transparent pricing with no hidden fees. Below are our standard rates for common dental procedures.
            Contact us for a personalized treatment plan and exact pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-700 text-white py-4 px-6">
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {category.services.map((service, serviceIndex) => (
                      <tr key={serviceIndex} className={serviceIndex !== category.services.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="py-4 text-gray-700">{service.name}</td>
                        <td className="py-4 text-right font-semibold text-red-700">{service.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Insurance & Payment Options</h3>
          <p className="text-gray-600 mb-4">
            We accept most dental insurance plans and offer flexible payment options to make dental care accessible for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded p-4">
              <h4 className="font-medium text-red-600 mb-2">Insurance</h4>
              <p className="text-sm text-gray-600">We work with most major insurance providers to ensure you get the maximum benefits.</p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h4 className="font-medium text-red-600 mb-2">Payment Plans</h4>
              <p className="text-sm text-gray-600">Flexible payment plans available for more extensive treatments and procedures.</p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h4 className="font-medium text-red-600 mb-2">Discounts</h4>
              <p className="text-sm text-gray-600">Special discounts for families and senior citizens. Ask our staff for details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

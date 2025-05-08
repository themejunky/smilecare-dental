"use client";

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const LocationSection = () => {
  // Static map URL using OpenStreetMap
  const mapImageUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Strada+Maria+Rosetti+26A,+București+020487&zoom=15&size=600x400&markers=color:blue%7CStrada+Maria+Rosetti+26A,+București+020487&key=";
  
  // Coordinates for the location (approximate for Strada Maria Rosetti 26A, București)
  const latitude = 44.4396;
  const longitude = 26.1016;
  
  // OpenStreetMap URL as a fallback (no API key required)
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&amp;layer=mapnik&amp;marker=${latitude}%2C${longitude}`;

  return (
    <section id="location" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in central București. Visit us today for your dental care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              {/* Static Map using iframe with OpenStreetMap (no API key required) */}
              <iframe
                src={openStreetMapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="SmileCare Dental Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">Strada Maria Rosetti 26A, București 020487</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">0720.123.123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@smilecare.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-600">Saturday: 9:00 - 14:00</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Getting Here</h4>
              <p className="text-gray-600 text-sm">
                We're easily accessible by public transportation. The nearest bus stops are within a 2-minute walk, and there's paid parking available nearby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

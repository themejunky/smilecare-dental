"use client";

import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Maria Ionescu',
    image: '/img/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg',
    rating: 5,
    text: 'I was extremely nervous about my dental visit, but the team at SmileCare Dental made me feel so comfortable. Dr. Popescu was gentle, thorough, and explained everything clearly. My teeth have never looked better!',
  },
  {
    id: 2,
    name: 'Alexandru Popa',
    image: '/img/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
    rating: 5,
    text: 'Finding a good family dentist was important to us, and SmileCare Dental exceeded our expectations. The staff is amazing with our children, and the quality of care is exceptional. Highly recommend!',
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    image: '/img/reviews/ivana-cajina-_7LbC5J-jw4-unsplash.jpg',
    rating: 5,
    text: 'I had a dental emergency and they fit me in the same day. The care I received was top-notch, and they followed up to make sure I was doing well. This practice truly cares about their patients.',
  },
  {
    id: 4,
    name: 'Mihai Stanescu',
    image: '/img/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg',
    rating: 4,
    text: 'After years of avoiding the dentist due to fear, I finally found SmileCare Dental. Their patient-centered approach and modern techniques have completely changed my perspective on dental visits.',
  },
  {
    id: 5,
    name: 'Andreea Vasile',
    image: '/img/reviews/charles-etoroma-95UF6LXe-Lo-unsplash.jpg',
    rating: 5,
    text: 'The cosmetic work I had done at SmileCare Dental has transformed my smile and boosted my confidence. The results are natural-looking and exactly what I wanted. Worth every penny!',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience at SmileCare Dental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

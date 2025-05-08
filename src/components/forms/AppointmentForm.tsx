"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('We&apos;re experiencing technical issues. Please call us at 0720.123.123 or email us at info@smilecare.com with your appointment request.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you! Your appointment request has been received. We'll contact you shortly.
        </div>
      )}
      
      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {submitError}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Name*
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your full name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Phone*
        </label>
        <input
          id="phone"
          type="tel"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your phone number"
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9+\s()-]{8,15}$/,
              message: 'Please enter a valid phone number'
            }
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email*
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your email address"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about your dental needs"
          {...register('message')}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
      >
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
};

export default AppointmentForm;

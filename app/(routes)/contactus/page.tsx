"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | null>(null);

  // FIX: Added TypeScript type for the form event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate a form submission
    setFormStatus('sending'); 
    setTimeout(() => {
      setFormStatus('success');
      e.currentTarget.reset(); // Use currentTarget instead of target for better type safety
      setTimeout(() => setFormStatus(null), 3000); // Reset status after 3s
    }, 1500);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium text-black md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We're here to help. Contact us for questions, appointments, or custom design inquiries.
          </p>
        </div>

        {/* Main Content: Form + Info */}
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <h2 className="font-serif text-3xl text-gray-900">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="mt-1 flex-shrink-0 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Flagship Store</h3>
                  <p className="text-gray-700">123 Diamond Avenue, London, W1S 1AN</p>
                  <a href="#" className="mt-1 inline-block text-sm font-medium text-amber-600 hover:text-amber-700">Get Directions</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="mt-1 flex-shrink-0 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">+44 (0)20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail size={24} className="mt-1 flex-shrink-0 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">concierge@veloriajewels.com</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900">Store Hours</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>Monday - Friday: 10:00 AM - 6:00 PM</li>
                <li>Saturday: 11:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5} // Passed as number
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full rounded-md bg-black px-8 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {formStatus === 'success' && (
                <p className="text-center text-green-600">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
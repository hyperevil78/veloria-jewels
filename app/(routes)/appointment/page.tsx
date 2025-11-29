"use client";

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, CheckCircle, AlertCircle } from 'lucide-react';

export default function BookAppointmentPage() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // 1. Capture Form Data
    const formData = new FormData(e.currentTarget);
    
    const appointmentData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      type: formData.get('type'),
      service: formData.get('service'),
      date: formData.get('date'),
      time: formData.get('time'),
      notes: formData.get('notes'),
    };

    try {
      // 2. Send to API
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to book appointment');
      }

      // 3. Success
      setFormStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: any) {
      console.error("Booking Error:", error);
      setFormStatus('error');
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle size={40} />
        </div>
        <h1 className="mb-4 font-serif text-4xl font-medium text-black">Request Received</h1>
        <p className="max-w-md text-lg text-gray-600">
          Thank you for booking with Veloria. We have received your request and will contact you shortly to confirm your appointment time.
        </p>
        <button
          onClick={() => setFormStatus('idle')}
          className="mt-8 border-b-2 border-black pb-1 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:border-amber-600 hover:text-amber-600"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full bg-black">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-6xl">
            Book an Appointment
          </h1>
          <p className="max-w-xl text-lg font-light text-gray-200 md:text-xl">
            Experience personalized service with our dedicated jewellery experts.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-medium text-black mb-4">Why Book?</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you are looking for the perfect engagement ring, creating a custom piece, or seeking expert advice on a family heirloom, our specialists are here to guide you without any pressure.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-black">In-Store Consultation</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Visit our flagship boutique for a hands-on experience with our collection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 p-3 rounded-full">
                  <Video className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-black">Virtual Appointment</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Meet with an expert from the comfort of your home via video call.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Error Message Display */}
              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-800 rounded-md flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Section 1: Personal Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs mr-3">1</span>
                  Your Details
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    {/* Added 'name' attribute */}
                    <input type="text" name="firstName" id="firstName" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    {/* Added 'name' attribute */}
                    <input type="text" name="lastName" id="lastName" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    {/* Added 'name' attribute */}
                    <input type="email" name="email" id="email" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    {/* Added 'name' attribute */}
                    <input type="tel" name="phone" id="phone" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" />
                  </div>
                </div>
              </div>

              {/* Section 2: Appointment Preferences */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs mr-3">2</span>
                  Appointment Details
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Appointment Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="cursor-pointer border rounded-lg p-4 flex items-center hover:border-amber-500 hover:bg-white transition-colors">
                        <input type="radio" name="type" value="instore" className="h-4 w-4 text-amber-600 focus:ring-amber-500" defaultChecked />
                        <span className="ml-3 block text-sm font-medium text-gray-900">In-Store Visit</span>
                      </label>
                      <label className="cursor-pointer border rounded-lg p-4 flex items-center hover:border-amber-500 hover:bg-white transition-colors">
                        <input type="radio" name="type" value="virtual" className="h-4 w-4 text-amber-600 focus:ring-amber-500" />
                        <span className="ml-3 block text-sm font-medium text-gray-900">Virtual Consultation</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                    {/* Added 'name' attribute */}
                    <select name="service" id="service" className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3">
                      <option value="Engagement Ring Consultation">Engagement Ring Consultation</option>
                      <option value="Wedding Bands">Wedding Bands</option>
                      <option value="Custom Design Service">Custom Design Service</option>
                      <option value="Jewellery Appraisal">Jewellery Appraisal</option>
                      <option value="Repair & Restoration">Repair & Restoration</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        {/* Added 'name' attribute */}
                        <input type="date" name="date" id="date" required className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        {/* Added 'name' attribute */}
                        <select name="time" id="time" className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3">
                          <option value="Morning (10am - 12pm)">Morning (10am - 12pm)</option>
                          <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                          <option value="Evening (4pm - 6pm)">Evening (4pm - 6pm)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                    {/* Added 'name' attribute */}
                    <textarea name="notes" id="notes" rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-3" placeholder="Tell us a bit more about what you are looking for..."></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-black text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:bg-amber-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Submitting Request...' : 'Confirm Appointment Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Leaf, Recycle, Globe, HeartHandshake, ShieldCheck, Package } from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        {/* <img
          src="https://placehold.co/1800x1000/111827/a18a6a?text=Sustainable+Luxury"
          alt="Close up of a green leaf with dew drops"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        /> */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-6xl">
            Conscious Luxury
          </h1>
          <p className="max-w-xl text-lg font-light text-gray-200 md:text-2xl">
            Beautiful jewellery shouldn't cost the Earth.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <Leaf size={48} className="mx-auto mb-6 text-amber-600" />
        <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
          Our Commitment to the Planet
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At Veloria, we believe that true luxury is transparent, responsible, and sustainable. 
          We are committed to minimizing our environmental footprint and maximizing our positive social impact, 
          ensuring that the pieces you cherish today can be worn with pride forever.
        </p>
      </div>

      {/* Key Pillars */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Pillar 1 */}
            <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <Globe size={32} className="text-amber-600" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We strictly adhere to the Kimberley Process, ensuring all our diamonds are 100% conflict-free. 
                We trace our gemstones to mines that uphold high standards of human rights and environmental safety.
              </p>
            </div>
            {/* Pillar 2 */}
            <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <Recycle size={32} className="text-amber-600" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">Recycled Metals</h3>
              <p className="text-gray-600">
                To reduce the destructive impact of mining, we use 100% recycled 18k gold and platinum. 
                These refined metals offer the exact same purity and quality as newly mined metals, without the footprint.
              </p>
            </div>
            {/* Pillar 3 */}
            <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <HeartHandshake size={32} className="text-amber-600" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">Community Support</h3>
              <p className="text-gray-600">
                We partner with workshops that provide fair wages and safe working conditions. 
                A portion of our annual profits is invested back into the communities where our materials are sourced.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section: Packaging */}
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img 
              src="/images/packaging.jpg" 
              alt="Minimalist, eco-friendly jewellery box" 
              className="h-full w-full object-cover rounded-lg" 
            />
          </div>
          <div data-aos="fade-left" className="w-full md:w-1/2">
            <Package size={40} className="mb-6 text-amber-600" />
            <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
              Sustainable Unboxing
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The Veloria experience extends to our packaging. Our signature boxes are crafted from 
              FSC-certified paper and recycled materials. We have eliminated single-use plastics 
              from our shipping process, opting for biodegradable alternatives that protect your 
              jewellery and the planet.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <ShieldCheck className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>FSC-Certified paper materials</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>Reusable aesthetic storage boxes</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>Carbon-neutral shipping options available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-black py-16 text-center text-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-6 font-serif text-3xl font-medium">Join Us on Our Journey</h2>
          <p className="mb-8 text-lg text-gray-300">
            Learn more about our certifications or speak to our team about the provenance of a specific piece.
          </p>
          <a
            href="/contactus"
            className="inline-block bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-amber-600 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
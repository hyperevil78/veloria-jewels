"use client"

import Link from 'next/link';
import React from 'react';
// import Link from 'next/link'; // using <a> for preview environment
import { Filter, ChevronDown } from 'lucide-react';

// Mock Data for Rubies (IDs updated to strings "5"-"8")
const rubies = [
  {
    id: "5",
    name: "The Crimson Heart Ring",
    price: "$6,200",
    category: "Ring",
    image: "/collections/ruby/ruh.webp",
    isNew: true
  },
  {
    id: "6",
    name: "Scarlet Drop Earrings",
    price: "$3,100",
    category: "Earrings",
    image: "/collections/ruby/rue.webp",
    isNew: false
  },
  {
    id: "7",
    name: "Imperial Ruby Necklace",
    price: "$8,500",
    category: "Necklace",
    image: "/collections/ruby/run.webp",
    isNew: false
  },
  {
    id: "8",
    name: "Royal Tennis Bracelet",
    price: "$4,900",
    category: "Bracelet",
    image: "/collections/ruby/rub.webp",
    isNew: true
  },
];

export default function RubyPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8">
        <h1 className="font-serif text-4xl font-medium text-black md:text-5xl">
          The Crimson Royal
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Symbolizing passion, protection, and power. Our unheated Rubies are selected for their intense 'pigeon blood' color and exceptional clarity.
        </p>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-[72px] z-40 border-y border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
            <Filter size={18} />
            <span>Filter</span>
          </div>
          
          {/* Middle section - Product Count */}
          <div className="hidden md:block text-sm font-medium text-gray-500">
            <span>{rubies.length} Exquisite Pieces</span>
          </div>

          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
            <span>Sort by</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {rubies.map((item) => (
            // CHANGE: Using standard anchor tag for preview compatibility
            <Link href={`/products/${item.id}`} key={item.id} className="group relative block">
              
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm relative">
                {item.isNew && (
                  <span className="absolute top-3 left-3 z-10 bg-rose-900 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    New Arrival
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  // Fallback for broken image links in preview
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x800/7f1d1d/e2e8f0?text=Ruby";
                  }}
                />
                {/* CHANGE: Use div instead of button to avoid nesting button inside link */}
                <div className="absolute bottom-0 left-0 right-0 w-full bg-rose-900/90 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-rose-800">
                  View Details
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {/* CHANGE: Removed inner anchor tag to prevent nested links */}
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bespoke Service CTA */}
      <div className="bg-rose-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-medium text-black">
            Passion in Every Facet
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
            Searching for a rare Burmese ruby or a specific vintage cut? Our experts can help you source the perfect stone to create an heirloom of the future.
          </p>
          {/* Updated to Link for internal navigation */}
          <a 
            href="/appointment" 
            className="inline-block bg-rose-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-rose-800"
          >
            Speak to a Gemologist
          </a>
        </div>
      </div>
    </div>
  );
}
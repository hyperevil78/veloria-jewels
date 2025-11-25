import React from 'react';
import Link from 'next/link';
import { Filter, ChevronDown } from 'lucide-react';

// Mock Data for Emeralds (IDs updated to strings "1"-"4")
const emeralds = [
  {
    id: "1",
    name: "The Verdant Empress Rings",
    price: "$4,800",
    category: "Ring",
    image: "/collections/emerald/emr1.webp",
    isNew: true
  },
  {
    id: "2",
    name: "Forest Drop Earrings",
    price: "$2,200",
    category: "Earrings",
    image: "/collections/emerald/eme.webp",
    isNew: false
  },
  {
    id: "3",
    name: "Colombian Emerald Pendant",
    price: "$3,500",
    category: "Necklace",
    image: "/collections/emerald/emp.webp",
    isNew: false
  },
  {
    id: "4",
    name: "Ivy League Tennis Bracelet",
    price: "$5,100",
    category: "Bracelet",
    image: "/collections/emerald/emb.webp",
    isNew: true
  },
];

export default function EmeraldsPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8">
        <h1 className="font-serif text-4xl font-medium text-black md:text-5xl">
          The Verdant Collection
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          A celebration of nature's most captivating hue. Sourced ethically from Colombia and Zambia, these stones ignite with an inner green fire.
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
            <span>{emeralds.length} Exquisite Pieces</span>
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
          {emeralds.map((item) => (
            // CHANGE: Wrap the card in a Next.js Link
            <Link href={`/products/${item.id}`} key={item.id} className="group relative block">
              
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm relative">
                {item.isNew && (
                  <span className="absolute top-3 left-3 z-10 bg-emerald-900 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    New Arrival
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* CHANGE: Use div instead of button for "View Details" to avoid nesting button inside link */}
                <div className="absolute bottom-0 left-0 right-0 w-full bg-emerald-900/90 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-emerald-800">
                  View Details
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {/* CHANGE: Removed inner anchor tag */}
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
      <div className="bg-emerald-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-medium text-black">
            In Search of a Specific Stone?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
            Our gemologists can source rare emeralds of specific cuts, clarity, and origin to create a custom piece that is truly one of a kind.
          </p>
          {/* Updated to Link for internal navigation */}
          <Link 
            href="/appointment" 
            className="inline-block bg-emerald-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            Speak to a Gemologist
          </Link>
        </div>
      </div>
    </div>
  );
}
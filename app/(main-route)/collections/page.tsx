"use client"
import React from 'react';
// import Link from 'next/link'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



// Data for the Gemstone Collections
const collectionData = [
  {
    name: "The Verdant Collection",
    description: "A celebration of nature's most captivating hue. Our Emerald collection features deep, lush gemstones sourced ethically from Colombia and Zambia, set in yellow gold to ignite their inner green fire.",
    image: "/collections/emerald/em1.png",
    href: "/emerald"
  },
  {
    name: "The Crimson Royal",
    description: "Symbolizing passion, protection, and power. This collection showcases unheated Rubies, selected for their intense 'pigeon blood' color and exceptional clarity, creating heirlooms of the future.",
    image: "/collections/ruby/ru1.png",
    href: "/ruby"
  },
  {
    name: "The Tanzanite Rarity",
    description: "A gemstone a thousand times rarer than diamonds. Found only in the foothills of Mount Kilimanjaro, these mesmerizing violet-blue stones represent the pinnacle of exclusivity and mystical allure.",
    image: "/collections/tanzanite/ta1.png",
    href: "/tanzanite"
  },
];

export default function CollectionsPage() {


  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true
    })
  })

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        <img
          src="/collections/ban1.jpg"
          alt="A display of rare gemstones including emeralds and rubies"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 font-serif text-4xl font-light tracking-tight md:text-6xl">
            Our Collections
          </h1>
          <p className="max-w-xl text-lg font-light text-gray-200 md:text-xl">
            The Earth's most precious treasures, curated for you.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="container mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
          The Big Three & Beyond
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We specialize in the extraordinary. Beyond diamonds, our passion lies in the
          vibrant world of colored gemstones. Each collection is a tribute to the unique
          character, geology, and beauty of these rare minerals.
        </p>
      </div>

      {/* Collections List */}
      <div className="container mx-auto max-w-7xl px-6 pb-16 sm:pb-24 overflow-auto">
        <div className="space-y-24">
          {collectionData.map((collection, index) => (
            <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              key={collection.name}
              className={`flex flex-col items-center gap-12 md:gap-16 ${
                // Alternate layout: image left, text right, then reverse
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <a href={collection.href} className="group">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90 rounded-sm shadow-lg"
                  />
                </a>
              </div>

              {/* Text Content */}
              <div className="w-full text-center md:w-1/2 md:text-left">
                <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
                  {collection.name}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                  {collection.description}
                </p>
                <a
                  href={collection.href}
                  className="inline-block bg-black px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-amber-600 rounded-md"
                >
                  Discover The Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
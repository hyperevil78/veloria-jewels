import React from 'react';
import { Gem, ShieldCheck, HandHeart } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        <img
          src="/images/store.jpg"
          alt="Artisan crafting jewellery in a workshop"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 font-serif text-4xl font-light tracking-tight md:text-6xl">
            Our Story
          </h1>
          <p className="max-w-xl text-lg font-medium text-gray-50 md:text-xl ">
            Crafting more than jewellery. We craft legacies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
            From a Dream to a Diamond
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Veloria Jewels was founded on a simple, profound idea: that fine jewellery should be
            as unique and enduring as the moments it commemorates. Born from a family
            of artisans, our journey began not in a boardroom, but in a small, sunlit workshop
            where a love for art and precious materials blossomed into a lifelong passion.
          </p>
        </div>

        {/* Our Philosophy Section */}
        <div className="my-24 grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="text-center">
            <Gem size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              Timeless Design
            </h3>
            <p className="text-gray-700">
              We believe in beauty that transcends trends. Our designs blend classic
              elegance with a modern sensibility, ensuring each piece is cherished
              for generations.
            </p>
          </div>
          <div className="text-center">
            <ShieldCheck size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              Ethical Sourcing
            </h3>
            <p className="text-gray-700">
              True beauty is responsible. We are committed to using only
              ethically sourced, conflict-free diamonds and gemstones,
              and recycled precious metals.
            </p>
          </div>
          <div className="text-center">
            <HandHeart size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              Master Craftsmanship
            </h3>
            <p className="text-gray-700">
              Every Veloria piece is a work of art. Our master artisans pour
              decades of experience and meticulous attention into every
              setting, polish, and detail.
            </p>
          </div>
        </div>

        {/* Image & Text Section */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse md:gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="/images/artisan.jpg" 
              alt="Close-up of artisan's hands working on a gold ring" 
              className="h-full w-full object-cover rounded-md" 
            />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
              The Heart of the Craft
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Our workshop is the soul of Veloria. It's where creativity, precision,
              and passion converge. We honour traditional techniques passed down
              through generations while embracing innovation to bring our
              visionary designs to life.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Each gemstone is hand-selected for its exceptional quality and character.
              Each setting is sculpted by hand. This devotion to craft is our promise
              to you—a promise of unparalleled quality and a personal touch
              that mass production can never replicate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
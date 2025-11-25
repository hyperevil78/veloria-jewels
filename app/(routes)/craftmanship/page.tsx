import React from 'react';
import { Microscope, Sparkles, Diamond, Hand } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { div } from 'motion/react-client';

export default function CraftsmanshipPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-black">
        {/* <img
          src=""
          alt="A detailed close-up of a diamond ring"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        /> */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-6xl">
            The Art of Craft
          </h1>
          <p className="max-w-xl text-lg font-light text-gray-200 md:text-2xl">
            A devotion to perfection in every facet.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
            Beyond the Material
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Veloria, craftsmanship is not just a process; it is our promise. It is the silent language of quality,
            spoken through meticulous hands and discerning eyes. We transform the earth's most precious
            materials into wearable art that carries a soul.
          </p>
        </div>

        {/* Core Pillars Section */}
        <div className="my-24 grid grid-cols-1 gap-16 md:grid-cols-3">

          <div data-aos="fade-up"
     data-aos-duration="1000" className="text-center">
            <Diamond size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              The Finest Materials
            </h3>
            <p className="text-gray-700">
              Our journey begins with the source. We select only the most exceptional,
              ethically sourced gemstones and conflict-free diamonds, paired with
              recycled 18k gold and platinum.
            </p>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="1000" className="text-center">
            <Hand size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              By Hand & Heart
            </h3>
            <p className="text-gray-700">
              Each piece is brought to life by our master artisans. Traditional
              bench-work techniques, from hand-setting stones to polishing,
              ensure a human touch that is simply irreplaceable.
            </p>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="1000" className="text-center">
            <Microscope size={40} className="mx-auto mb-4 text-amber-600" />
            <h3 className="mb-2 font-serif text-2xl font-medium text-black">
              Precision & Detail
            </h3>
            <p className="text-gray-700">
              We obsess over the details. Every angle, every clasp, and every
              hidden surface is finished to perfection under microscopic
              inspection for a flawless result.
            </p>
          </div>
        </div>

        {/* Image & Text Section 1 */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <div data-aos="fade-right" className="w-full md:w-1/2">
            <img 
              src="/images/setter.jpg" 
              alt="Artisan meticulously setting a gemstone" 
              className="h-full w-full object-cover" 
            />
          </div>
          <div data-aos="fade-left" className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
              The Setter's Art
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Setting a stone is an art of precision. Our setters, with decades of
              experience, meticulously carve seats for each diamond and gemstone,
              ensuring not only its security but also its maximum brilliance and
              fire.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This painstaking process, often involving microscopic work, allows
              for minimal metal to be visible, letting the stone's natural beauty
              shine as the true hero.
            </p>
          </div>
        </div>

        {/* Image & Text Section 2 (Reversed) */}
        <div className="mt-24 flex flex-col items-center gap-12 md:flex-row-reverse md:gap-16">
          <div data-aos="fade-left" className="w-full md:w-1/2">
            <img 
              src="/images/polish.jpg" 
              alt="A finished gold ring being polished to a mirror shine" 
              className="h-full w-full object-cover" 
            />
          </div>
          <div data-aos="fade-right" className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
              The Final Polish
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Before a piece can be called Veloria, it undergoes a rigorous
              multi-stage polishing. Our artisans patiently work each surface,
              transforming the raw metal into a lustrous, mirror-like finish
              that feels as exquisite as it looks.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              It is this final, loving touch that ensures the piece not only
              catches the light, but also the heart.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
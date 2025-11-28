"use client"
// import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

import {
  SignInButton,SignUpButton,SignedIn,SignedOut,UserButton} from '@clerk/nextjs'


const Featured = () => {

  useEffect(() => {
    AOS.init({
      duration:700,
      once:true
    })
  })
  

  return (
    <section data-aos="fade-up" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2 ">
            <img 
              src="/eclipse/eclipse cuff.png" 
              alt="The Lunar Eclipse Cuff" 
              className="h-full w-full object-cover rounded-md shadow-lg" 
            />
          </div>
          {/* Text Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="mb-4 font-serif text-sm uppercase tracking-widest text-amber-600">
              Exclusively Veloria
            </h3>
            <h2 className="mb-6 font-serif text-3xl font-medium text-black md:text-4xl">
              The Lunar Eclipse Cuff
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              A refined tribute to the beauty of an eclipse. This polished golden cuff captures the moment where brilliance cuts through darkness, framed in a sleek crescent form. The center gemstone sits like a star emerging from shadow, giving the piece a quiet but unmistakable luxury. Designed for someone who wants elegance without trying too hard, it stands as a modern icon crafted to feel both timeless and rare.
            </p>
            {/* <a
              href="/collections"
              onClick={(e) => e.preventDefault()}
              className="inline-block bg-black px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-amber-600 rounded-md"
            >
              View The Masterpiece
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured;
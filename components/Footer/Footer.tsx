"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import next from 'next';

const Footer = () => {

// const LucideIcon = ({ icon: Icon, ...props }) => <Icon {...props} />;

const SocialIcons = () => (
  <div className="flex space-x-4">
    <a href="#" aria-label="Facebook" className="text-white transition-colors duration-300 hover:text-amber-500">
      <Facebook size={20} />
    </a>
    <a href="#" aria-label="Instagram" className="text-white transition-colors duration-300 hover:text-amber-500">
      <Instagram size={20} />
    </a>
    <a href="#" aria-label="Twitter" className="text-white transition-colors duration-300 hover:text-amber-500">
      <Twitter size={20} />
    </a>
    <a href="#" aria-label="YouTube" className="text-white transition-colors duration-300 hover:text-amber-500">
      <Youtube size={20} />
    </a>
  </div>
);


  return (
     <footer className="bg-black text-white">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo & Socials */}
          <div className="md:col-span-1">
            <a href="#" className="mb-6 inline-block font-serif text-3xl md:text-6xl font-bold text-amber-400">
              Veloria
            </a>
            <p className="mb-6 text-sm text-gray-300">
              Crafting timeless elegance for the modern age.
            </p>
            <SocialIcons />
          </div>

          {/* Links: Shop */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">All Jewellery</a></li>
              <li><a href="collections" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Collections</a></li>
              <li><a href="rings" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Rings</a></li>
              <li><a href="#" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Gift Cards</a></li>
            </ul>
          </div>

          {/* Links: About */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">About</h4>
            <ul className="space-y-3">
              <li><Link href="aboutus" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Our Story</Link></li>
              <li><Link href="craftmanship" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Craftsmanship</Link></li>
              <li><a href="sustainability" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Careers</a></li>
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link href="contactus" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Contact Us</Link></li>
              <li><Link href="faq" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">FAQ</Link></li>
              {/* <li><a href="#" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Shipping & Returns</a></li> */}
              <li><Link href="/appointment" className="text-gray-300 transition-colors duration-300 hover:text-amber-500">Book Appointment</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Veloria Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

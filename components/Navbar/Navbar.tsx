// app/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Heart, Search, Menu, X, Trash2 } from "lucide-react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

// <-- Correct relative import (case-sensitive file name)
import { useWishlist } from "../../app/context/wishlistContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // --- CONNECT TO CONTEXT ---
  const { wishlist, removeFromWishlist } = useWishlist();


  useEffect(() => {
    AOS.init({
      duration:500,
      once:true
    })
  
  })

  return (
    <header data-aos="fade-down" className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left Side */}
        <div className="flex flex-1 items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="mr-4 text-black md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <div className="hidden space-x-6 md:flex">
            <Link href="/rings" className="font-medium text-black transition-colors duration-300 hover:text-amber-600">
              Rings
            </Link>
            <Link href="/necklace" className="font-medium text-black transition-colors duration-300 hover:text-amber-600">
              Necklaces
            </Link>
            <Link href="/earrings" className="font-medium text-black transition-colors duration-300 hover:text-amber-600">
              Earrings
            </Link>
            <Link href="/bracelets" className="font-medium text-black transition-colors duration-300 hover:text-amber-600">
              Bracelets
            </Link>
            <Link href="/collections" className="font-medium text-black transition-colors duration-300 hover:text-amber-600">
              Collections
            </Link>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="px-4">
          <Link href="/" className="font-serif text-3xl font-bold text-amber-400">
            Veloria
          </Link>
        </div>

        {/* Right Side: Icons */}
        <div className="flex flex-1 items-center justify-end space-x-8">
          <button className="text-black transition-colors duration-300 hover:text-amber-600 hover:cursor-pointer" aria-label="Search">
            <Search size={22} />
          </button>

          {/* Heart Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsWishlistOpen(!isWishlistOpen)}
              className="relative flex items-center justify-center text-black transition-colors duration-300 hover:cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart
                className={`transition-all duration-300 ${isWishlistOpen ? "fill-red-600 text-red-600 scale-110" : "hover:fill-red-600 hover:text-red-600"}`}
                size={22}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            <div
              className={`absolute right-0 mt-4 w-80 origin-top-right rounded-md border border-gray-100 bg-white shadow-xl transition-all duration-300 ease-in-out ${
                isWishlistOpen ? "visible translate-y-0 opacity-100 scale-100" : "invisible -translate-y-2 opacity-0 scale-95"
              }`}
            >
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2">
                  <h3 className="font-serif text-lg font-medium text-black">Your Wishlist</h3>
                  <span className="text-xs text-gray-500">{wishlist.length} Items</span>
                </div>

                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {wishlist.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">Your wishlist is empty.</p>
                  ) : (
                    wishlist.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-100">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-center">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.category}</p>
                          <p className="mt-1 text-sm font-semibold text-amber-600">
                            {typeof item.price === "number" ? `$${item.price.toLocaleString()}` : item.price}
                          </p>
                        </div>
                        <button onClick={() => removeFromWishlist(item.id)} className="text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-4 border-t border-gray-100 pt-3">
                  <Link href="/wishlist" className="flex w-full items-center justify-center rounded-sm bg-black py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600" onClick={() => setIsWishlistOpen(false)}>
                    View Full Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex h-full w-full bg-white md:hidden">
          <div className="w-full max-w-xs p-6">
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl font-bold text-amber-600">
                Veloria
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="text-black" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-5">
              <Link href="/rings" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-black transition-colors duration-300 hover:text-amber-600">Rings</Link>
              <Link href="/necklaces" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-black transition-colors duration-300 hover:text-amber-600">Necklaces</Link>
              <Link href="/earrings" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-black transition-colors duration-300 hover:text-amber-600">Earrings</Link>
              <Link href="/bracelets" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-black transition-colors duration-300 hover:text-amber-600">Bracelets</Link>
              <Link href="/collections" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-black transition-colors duration-300 hover:text-amber-600">Collections</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

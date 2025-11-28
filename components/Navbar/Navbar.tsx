// app/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Heart, Search, Menu, X, Trash2 } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Wishlist Context
import { useWishlist } from "../../app/context/wishlistContext";

// Clerk Auth
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const { wishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  });

  return (
    <header data-aos="fade-down" className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LEFT NAV LINKS */}
        <div className="flex flex-1 items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="mr-4 text-black md:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="hidden space-x-6 md:flex">
            <Link href="/rings" className="font-medium text-black hover:text-amber-600">Rings</Link>
            <Link href="/necklace" className="font-medium text-black hover:text-amber-600">Necklaces</Link>
            <Link href="/earrings" className="font-medium text-black hover:text-amber-600">Earrings</Link>
            <Link href="/bracelets" className="font-medium text-black hover:text-amber-600">Bracelets</Link>
            <Link href="/collections" className="font-medium text-black hover:text-amber-600">Collections</Link>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="px-4">
          <Link href="/" className="font-serif text-3xl font-bold text-amber-400">
            Veloria
          </Link>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex flex-1 items-center justify-end space-x-6">

          {/* SEARCH ICON
          <button className="text-black hover:text-amber-600">
            <Search size={22} />
          </button> */}

          {/* WISHLIST DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsWishlistOpen(!isWishlistOpen)}
              className="relative flex items-center"
            >
              <Heart
                className={`${isWishlistOpen ? "fill-red-600 text-red-600 scale-110" : "hover:fill-red-600 hover:text-red-600"} transition-all`}
                size={22}
              />

              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* DROPDOWN PANEL */}
            <div
              className={`absolute right-0 mt-4 w-80 rounded-md border bg-white shadow-xl transition-all ${
                isWishlistOpen
                  ? "visible opacity-100 translate-y-0 scale-100"
                  : "invisible opacity-0 -translate-y-2 scale-95"
              }`}
            >
              <div className="p-4">
                {/* HEADER */}
                <div className="mb-3 flex justify-between border-b pb-2">
                  <h3 className="font-serif text-lg text-black">Your Wishlist</h3>
                  <span className="text-xs text-gray-500">{wishlist.length} Items</span>
                </div>

                {/* ITEMS LIST */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {wishlist.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">
                      Your wishlist is empty.
                    </p>
                  ) : (
                    wishlist.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="h-16 w-16 rounded-md overflow-hidden border">
                          <img src={item.image} className="h-full w-full object-cover" />
                        </div>

                        <div className="flex flex-1 flex-col justify-center">
                          <h4 className="text-sm font-medium line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.category}</p>
                          <p className="mt-1 text-sm font-semibold text-amber-600">
                            {typeof item.price === "number"
                              ? `$${item.price.toLocaleString()}`
                              : item.price}
                          </p>
                        </div>

                        <button onClick={() => removeFromWishlist(item.id)} className="text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* VIEW FULL WISHLIST */}
                <div className="mt-4 border-t pt-3">
                  <Link
                    href="/wishlist"
                    onClick={() => setIsWishlistOpen(false)}
                    className="block bg-black text-white py-2 text-center rounded-sm hover:bg-amber-600"
                  >
                    View Full Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CLERK AUTH AREA */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="hover:cursor-pointer px-4 py-2 bg-black text-white rounded-md hover:bg-amber-600 transition text-sm md:text-md">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="w-full max-w-xs p-6">
            <div className="flex justify-between mb-8">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl font-bold text-amber-600">
                Veloria
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-5">
              <Link href="/rings" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-600">Rings</Link>
              <Link href="/necklace" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-600">Necklaces</Link>
              <Link href="/earrings" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-600">Earrings</Link>
              <Link href="/bracelets" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-600">Bracelets</Link>
              <Link href="/collections" onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-600">Collections</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

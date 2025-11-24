// app/wishlist/page.tsx
"use client";

import React from "react";
import { Trash2, Heart } from "lucide-react";
import Link from "next/link";
// Import the context hook to get real data
import { useWishlist } from "../context/wishlistContext";

export default function WishlistPage() {
  // --- CONNECT TO CONTEXT ---
  // Get meaningful data from the global state
  const { wishlist, removeFromWishlist } = useWishlist();

  let content;

  // --- 1. Empty State ---
  if (wishlist.length === 0) {
    content = (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <Heart size={40} />
        </div>
        <h1 className="mb-2 font-serif text-3xl font-medium text-black">Your Wishlist is Empty</h1>
        <p className="mb-8 max-w-md text-gray-600">
          Keep track of your favorite pieces by clicking the heart icon while you shop.
        </p>
        <Link 
          href="/collections" 
          className="inline-block bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
        >
          Explore Collections
        </Link>
      </div>
    );
  } 
  // --- 2. Populated State ---
  else {
    content = (
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h1 className="mb-12 font-serif text-4xl font-medium text-black text-center md:text-left">
          My Wishlist ({wishlist.length})
        </h1>

        {/* NOTE: items-stretch + each card h-full ensures even card heights */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {wishlist.map((item) => (
            <div key={item.id} className="group relative flex flex-col h-full">
              
              {/* Image Link */}
              <Link href={`/products/${item.id}`} className="block overflow-hidden rounded-sm relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  // Simple fallback if image fails
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x600/e2e8f0/999999?text=Image"; 
                  }}
                />
                
                {/* Remove Button positioned inside image but prevents link navigation */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent link navigation when clicking trash
                    removeFromWishlist(item.id);
                  }}
                  className="absolute top-2 right-2 z-10 rounded-full bg-white p-2 text-gray-400 shadow-md transition-colors hover:text-red-600"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </Link>

              {/* Item Details (keeps layout consistent) */}
              <div className="mt-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/products/${item.id}`} className="relative inline-block">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    {/* Handle price display if it's a string or number */}
                    {typeof item.price === "number" ? `$${item.price.toLocaleString()}` : item.price}
                  </p>
                </div>

                <div className="mt-4">
                  <Link 
                    href="/appointment"
                    className="flex w-full items-center justify-center border border-black py-2 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {content}
    </div>
  );
}

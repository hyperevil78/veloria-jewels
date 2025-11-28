// app/bracelets/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Filter, ChevronDown } from "lucide-react";
import { allProducts } from "../../data/collections/product"; // adjust path if needed
import { TypewriterEffect } from "@/components/ui/Typerwriter-effect";

export default function BraceletsPage() {
  // include only items explicitly categorized as "bracelets" and not part of a special collection
  const products = allProducts.filter(
    (p) =>
      String(p.category).toLowerCase() === "bracelets" &&
      (!p.collection || String(p.collection).trim() === "")
  );


  const words = [{ text: "Bracelets", className: "font-serif text-4xl font-medium text-black md:text-5xl"}];

  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8">
       <TypewriterEffect words={words} />
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          From delicate chains to bold cuffs, designed to wrap your wrist in luxury.
        </p>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-[72px] z-40 border-y border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
            <Filter size={18} />
            <span>Filter</span>
          </div>

          <div className="hidden md:block text-sm font-medium text-gray-500">
            <span>{products.length} Products</span>
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
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative"
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm relative">
                {product.isNew && (
                  <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 text-xs font-bold uppercase tracking-widest text-black">
                    New
                  </span>
                )}

                <img
                  src={product.images?.[0] ?? product.images ?? "/placeholder.webp"}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.webp";
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Quick Action (appearing on hover) */}
                <div className="absolute bottom-0 left-0 right-0 w-full bg-white/90 py-3 text-sm font-semibold uppercase tracking-wider text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Details
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  {product.subCategory && (
                    <p className="mt-1 text-sm text-gray-500">{product.subCategory}</p>
                  )}
                </div>

                <p className="text-lg font-medium text-gray-900">
                  {typeof product.price === "number"
                    ? `$${product.price.toLocaleString()}`
                    : product.price}
                </p>
              </div>
            </Link>
          ))}

          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-20">
              No bracelets found. Check back later.
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="border border-black bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white">
            Load More
          </button>
        </div>
      </div>

      {/* Bespoke Service CTA */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-medium text-black">Wearable Art</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Looking to commemorate a milestone? Our bespoke service allows you to engrave, customize, or design a completely new bracelet that tells your story.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600 rounded-md"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

// app/rings/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Filter, ChevronDown } from "lucide-react";
import { allProducts } from "../../data/collections/product"; // adjust path if needed
import { TypewriterEffect } from "@/components/ui/Typerwriter-effect";


export default function RingsPage() {
  // Only include products that are in the "rings" category AND are NOT part of a special collection
  const products = allProducts.filter(
    (p) =>
      String(p.category).toLowerCase() === "rings" &&
      (!p.collection || String(p.collection).trim() === "")
  );


  const words = [{ text: "Rings", className: "font-serif text-4xl font-medium text-black md:text-5xl"}];



  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* <h1 className="font-serif text-4xl font-medium text-black md:text-5xl"> */}
           <TypewriterEffect words={words} />
        {/* </h1> */}
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Graceful touch creates happiness.
        </p>
      </div>

      {/* Filter & Sort */}
      <div className="sticky top-[72px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
            <Filter size={18} />
            <span>Filter</span>
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
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-sm relative">
                {product.isNew && (
                  <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 text-xs font-bold uppercase tracking-widest text-black">
                    New
                  </span>
                )}

                <img
                  src={product.images?.[0] ?? product.image ?? "/placeholder.webp"}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.webp";
                  }}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 w-full bg-white/90 py-3 text-sm font-semibold uppercase tracking-wider text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Details
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  {product.subCategory && (
                    <p className="mt-1 text-sm text-gray-500">{product.subCategory}</p>
                  )}
                </div>

                <p className="text-lg font-medium text-gray-900">
                  {typeof product.price === "number" ? `$${product.price.toLocaleString()}` : product.price}
                </p>
              </div>
            </Link>
          ))}

          {products.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-20">
              No rings found. Check back later.
            </div>
          )}
        </div>
      </div>

      {/* Bespoke CTA */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-medium text-black">
            Dreaming of something unique?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our bespoke design service allows you to create a one-of-a-kind ring that tells your unique love story.
          </p>

          <a
            href="/appointment"
            className="inline-block bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-amber-600 rounded-md"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

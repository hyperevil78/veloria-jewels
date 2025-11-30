"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, Heart, ShieldCheck } from "lucide-react";

// --- Imports ---
// 1. Import the data directly from your file
import { allProducts } from "../../data/collections/product";
import AccordionItem from "@/components/accordian/Accordian";

// --- Context ---
import { useWishlist } from "../../context/wishlistContext";

export default function ProductDetailsPage() {
  const params = useParams();
  // Handle ID safely
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // --- 1. FIND PRODUCT (Synchronous) ---
  // We look up the product directly from the imported array. No loading state needed.
  const product = allProducts.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? 0 : index);
  };

  // --- 2. WISHLIST CONTEXT ---
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Compute saved state (safely check if product exists first)
  const saved = product ? isInWishlist(product.id) : false;

  const handleToggleWishlist = () => {
    if (!product) return;

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] ?? "",
      // Map category fields based on what's available in your data
      category: product.collectionName ?? product.category ?? "Jewellery",
      collectionPath: product.collectionPath
    };

    if (saved) removeFromWishlist(product.id);
    else addToWishlist(item);
  };

  // --- 3. RENDER: NOT FOUND ---
  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center bg-white text-gray-900">
        <h1 className="text-2xl font-serif text-black">Product Not Found</h1>
        {id && <p className="text-gray-500 mt-2">ID: {id}</p>}
        <Link href="/collections" className="mt-4 underline text-gray-600 hover:text-black">
          Back to Collections
        </Link>
      </div>
    );
  }

  // --- 4. RENDER: MAIN PRODUCT ---
  // Check for 'collectionGroup' (if you updated data) or 'collection' (old data)
  // @ts-ignore - ignoring type check for flexible data structure
  const collectionKey = product.collectionGroup || product.collection;

  return (
    <div className="bg-white text-gray-900">
      
      {/* --- Breadcrumbs --- */}
      <nav className="container mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>

          {collectionKey ? (
            <>
              <Link href="/collections" className="hover:text-amber-600 transition-colors">Collections</Link>
              <span>/</span>
              <Link 
                href={product.collectionPath || `/collections/${collectionKey}`} 
                className="hover:text-amber-600 transition-colors"
              >
                {product.collectionName || collectionKey.charAt(0).toUpperCase() + collectionKey.slice(1)}
              </Link>
            </>
          ) : (
            <Link href="/collections" className="hover:text-amber-600 transition-colors">Collections</Link>
          )}

          <span>/</span>
          <span className="text-black font-medium truncate">{product.name}</span>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="container mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row relative lg:sticky lg:top-24">
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto md:flex-col md:w-24 md:overflow-visible py-2 md:py-0">
              {product.images?.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 md:w-full flex-shrink-0 overflow-hidden border transition-all ${
                    selectedImage === index ? "border-black ring-1 ring-black" : "border-gray-200 hover:border-gray-400"
                  }`}
                  aria-label={`Select image ${index + 1}`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-square w-full flex-1 overflow-hidden bg-gray-50 rounded-sm">
              <img
                src={product.images?.[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/1000x1000/e2e8f0/999999?text=Image+Not+Found";
                }}
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl font-medium text-black md:text-4xl">{product.name}</h1>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-2xl font-medium text-gray-900">
                ${Number(product.price).toLocaleString()}
              </p>

              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg leading-relaxed text-gray-700">{product.description}</p>
            </div>

            {/* Save to Wishlist */}
            <div className="mt-10">
              <button
                onClick={handleToggleWishlist}
                className={`hover:cursor-pointer flex w-full items-center justify-center space-x-3 border py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  saved ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-gray-50"
                }`}
              >
                <Heart size={20} className={saved ? "fill-white text-white" : "text-black"} />
                <span>{saved ? "Saved to Wishlist" : "Save to Wishlist"}</span>
              </button>

              <p className="mt-3 text-center text-xs text-gray-500 flex items-center justify-center">
                <ShieldCheck size={14} className="mr-1" />
                Authenticity Guaranteed. Store pickup or concierge delivery only.
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-gray-200">
              
              {/* Product Specifications */}
              <AccordionItem title="Product Specifications" isOpen={openAccordion === 1} onClick={() => handleAccordionClick(1)}>
                <ul className="space-y-2">
                  {product.details && Object.entries(product.details).map(([key, value]) => (
                    <li key={key} className="grid grid-cols-2 gap-4 border-b border-gray-50 pb-2 last:border-0">
                      <span className="capitalize text-gray-500 font-medium">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-gray-900">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              {/* Care & Maintenance */}
              <AccordionItem title="Care & Maintenance" isOpen={openAccordion === 2} onClick={() => handleAccordionClick(2)}>
                <p className="mb-2">To maintain the brilliance of your {product.collectionName?.slice(0, -1) || "Jewellery"}, we recommend cleaning it professionally once a year.</p>
                <p>For home care, gently wipe with a soft, lint-free cloth. Avoid exposure to harsh chemicals, perfumes, or extreme temperatures. Store in the provided Veloria velvet box when not in use.</p>
              </AccordionItem>

              {/* Concierge Services */}
              <AccordionItem title="Concierge Services" isOpen={openAccordion === 3} onClick={() => handleAccordionClick(3)}>
                <p className="mb-4">Need help with sizing or want to customize this piece? Our dedicated concierge team is here to assist you.</p>
                <Link href="/contact-us" className="text-amber-700 underline font-medium hover:text-amber-800">Contact Concierge</Link>
              </AccordionItem>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
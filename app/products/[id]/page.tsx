// app/products/[id]/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, Heart, ShieldCheck } from "lucide-react";

// Data + components (adjust paths if yours differ)
import { allProducts } from "../../data/collections/product";
import AccordionItem from "../../../components/accordian/Accordian";

// <-- Context import: from this file to app/context/wishlistContext.tsx
import { useWishlist } from "../../context/wishlistContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // find product by id (coerce to string for safety)
  const product = allProducts.find((p) => String(p.id) === String(id));

  // local UI state that is safe to keep
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? 0 : index);
  };

  // --- WISHLIST CONTEXT ---
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // compute saved state from the context (single source of truth)
  const saved = product ? isInWishlist(product.id) : false;

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

  const handleToggleWishlist = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] ?? "",
      category: product.collectionName ?? "",
    };

    if (saved) removeFromWishlist(product.id);
    else addToWishlist(item);
  };

  return (
    <div className="bg-white text-gray-900">



      
      {/* Dynamic Breadcrumbs: shows Collections path for collection items, category path for category items */}
      <nav className="container mx-auto max-w-7xl px-6 py-4 text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>

          {/* Collections root OR category root */}
          {product.collection ? (
            <>
              <Link href="/collections" className="hover:text-amber-600 transition-colors">Collections</Link>
              <span>/</span>
              <Link href={product.collectionPath || `/collections/${product.collection}`} className="hover:text-amber-600 transition-colors">
                {product.collectionName || product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
              </Link>
            </>
          ) : product.category ? (
            <>
              <Link href={`/${String(product.category).toLowerCase()}`} className="hover:text-amber-600 transition-colors">
                {String(product.category).charAt(0).toUpperCase() + String(product.category).slice(1)}
              </Link>
            </>
          ) : (
            // fallback — if neither collection nor category available, link to products index
            <Link href="/collections" className="hover:text-amber-600 transition-colors">Collections</Link>
          )}

          <span>/</span>
          <span className="text-black font-medium truncate">{product.name}</span>
        </div>
      </nav>


      <main className="container mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row relative lg:sticky lg:top-24">
            <div className="flex gap-4 overflow-x-auto md:flex-col md:w-24 md:overflow-visible py-2 md:py-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 md:w-full flex-shrink-0 overflow-hidden border transition-all ${selectedImage === index ? "border-black ring-1 ring-black" : "border-gray-200 hover:border-gray-400"
                    }`}
                  aria-label={`Select image ${index + 1}`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="relative aspect-square w-full flex-1 overflow-hidden bg-gray-50 rounded-sm">
              <img
                src={product.images[selectedImage]}
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
              <p className="text-2xl font-medium text-gray-900">${Number(product.price).toLocaleString()}</p>

              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg leading-relaxed text-gray-700">{product.description}</p>
            </div>

            {/* Save to Wishlist (uses context) */}
            <div className="mt-10">
              <button
                onClick={handleToggleWishlist}
                className={`flex w-full items-center justify-center space-x-3 border py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${saved ? "bg-black text-white border-black" : "bg-white text-black border-black hover:bg-gray-50"
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

            {/* Accordion */}
            <div className="mt-10 border-t border-gray-200">
              <AccordionItem title="Product Specifications" isOpen={openAccordion === 1} onClick={() => handleAccordionClick(1)}>
                <ul className="space-y-2">
                  {product.details && Object.entries(product.details).map(([key, value]) => (
                    <li key={key} className="grid grid-cols-2 gap-4 border-b border-gray-50 pb-2 last:border-0">
                      <span className="capitalize text-gray-500 font-medium">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                      <span className="text-gray-900">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem title="Care & Maintenance" isOpen={openAccordion === 2} onClick={() => handleAccordionClick(2)}>
                <p className="mb-2">To maintain the brilliance of your {product.collectionName?.slice(0, -1) || "Jewellery"}, we recommend cleaning it professionally once a year.</p>
                <p>For home care, gently wipe with a soft, lint-free cloth. Avoid exposure to harsh chemicals, perfumes, or extreme temperatures. Store in the provided Veloria velvet box when not in use.</p>
              </AccordionItem>

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

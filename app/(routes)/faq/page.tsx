"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Use <a> for preview compatibility

const faqData = [
  {
    question: "What materials are your pieces made of?",
    answer: "Our pieces are crafted from the highest quality materials, including 18k solid gold, platinum, and ethically sourced diamonds and gemstones. Specific material details are listed on each product page."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary by destination. All applicable duties and taxes will be calculated at checkout."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in their original packaging. Custom-made pieces are final sale and cannot be returned. Please visit our Shipping & Returns page for full details."
  },
  {
    question: "Can I customize a piece of jewellery?",
    answer: "Absolutely. We offer bespoke design services, from modifying an existing piece to creating a completely custom design from scratch. Please contact our concierge team to book a consultation."
  },
  {
    question: "How should I care for my jewellery?",
    answer: "To keep your jewellery looking its best, avoid contact with chemicals, store it in a soft-lined box, and clean it regularly with a gentle, non-abrasive cloth. For deep cleaning, we recommend professional servicing."
  }
];

export default function FaqPage() {
  // Explicitly define the state type so it can hold a number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Add type for index
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-medium text-black md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Have a question? We're here to help. Find answers to common queries below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-200 py-6">
                  <dt>
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between text-left text-gray-900"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-medium">{item.question}</span>
                      <span className="ml-6 flex h-7 w-7 flex-shrink-0 items-center justify-center">
                        <div className="relative h-5 w-5">
                          {/* Horizontal line */}
                          <span className="absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 bg-gray-900 transition-all duration-300"></span>
                          {/* Vertical line */}
                          <span 
                            className={`absolute top-0 left-1/2 block h-5 w-0.5 -translate-x-1/2 bg-gray-900 transition-transform duration-300 ${isOpen ? 'scale-y-0' : 'scale-y-100'}`}
                            aria-hidden="true"
                          ></span>
                        </div>
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="mt-4 pr-12">
                      <p className="text-base leading-7 text-gray-700">{item.answer}</p>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>

        {/* Still have questions? */}
        <div className="mt-20 text-center">
          <h2 className="font-serif text-2xl font-medium text-black">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Our team is happy to assist you. Get in touch with us directly.
          </p>
          {/* Changed Link to <a> for preview stability */}
          <Link
            href="/contactus" 
            className="mt-8 inline-block rounded-md bg-black px-8 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-amber-600"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
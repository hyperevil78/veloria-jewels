"use client";

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-black focus:outline-none transition-colors duration-200"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
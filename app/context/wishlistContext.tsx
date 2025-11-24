// app/context/wishlistContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type WishlistItem = {
  id: string | number;
  name: string;
  price: number | string;
  image?: string;
  category?: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string | number) => void;
  isInWishlist: (id: string | number) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
const LOCAL_KEY = "veloria_wishlist_v1";

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) setWishlist(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to load wishlist from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.warn("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  const addToWishlist = (item: WishlistItem) =>
    setWishlist((prev) => (prev.some((p) => String(p.id) === String(item.id)) ? prev : [...prev, item]));

  const removeFromWishlist = (id: string | number) =>
    setWishlist((prev) => prev.filter((p) => String(p.id) !== String(id)));

  const isInWishlist = (id: string | number) => wishlist.some((p) => String(p.id) === String(id));

  const clearWishlist = () => setWishlist([]);

  const value = useMemo(
    () => ({ wishlist, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }),
    [wishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}

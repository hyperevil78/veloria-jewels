"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useUser } from "@clerk/nextjs";

// Define Item Type
export interface WishlistItem {
  id: string;
  name: string;
  price: number | string;
  image: string;
  category?: string;
  collectionPath?: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  isLoading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded: isClerkLoaded } = useUser();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- 1. INITIAL LOAD & MERGE LOGIC ---
  useEffect(() => {
    if (!isClerkLoaded) return;

    const loadWishlist = async () => {
      setIsLoading(true);
      
      // A. LOGGED IN: Check LocalStorage for items to merge, then fetch DB
      if (user) {
        try {
          const localData = localStorage.getItem("veloria_wishlist");
          
          // If we have local items, merge them to DB first
          if (localData && JSON.parse(localData).length > 0) {
            const localItems = JSON.parse(localData);
            
            await fetch("/api/wishlist/merge", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ items: localItems }),
            });
            
            // Clear local storage after successful merge
            localStorage.removeItem("veloria_wishlist");
          }

          // Fetch the definitive list from DB
          const res = await fetch("/api/wishlist");
          if (res.ok) {
            const data = await res.json();
            setWishlist(data.items || []);
          }
        } catch (error) {
          console.error("Failed to fetch/merge wishlist", error);
        }
      } 
      // B. GUEST: Load directly from LocalStorage
      else {
        const localData = localStorage.getItem("veloria_wishlist");
        if (localData) {
          setWishlist(JSON.parse(localData));
        }
      }
      setIsLoading(false);
    };

    loadWishlist();
  }, [user, isClerkLoaded]);

  // --- 2. ADD ITEM ---
  const addToWishlist = async (item: WishlistItem) => {
    // Optimistic UI update
    const newItem = { ...item, id: String(item.id) };
    if (wishlist.some((i) => i.id === newItem.id)) return;

    const updatedList = [...wishlist, newItem];
    setWishlist(updatedList);

    if (user) {
      // Sync to DB
      try {
        await fetch("/api/wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ item: newItem }),
        });
      } catch (err) {
        console.error("Error adding to DB", err);
      }
    } else {
      // Sync to LocalStorage
      localStorage.setItem("veloria_wishlist", JSON.stringify(updatedList));
    }
  };

  // --- 3. REMOVE ITEM ---
  const removeFromWishlist = async (id: string) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);

    if (user) {
      // Remove from DB
      try {
        await fetch("/api/wishlist", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ itemId: id }),
        });
      } catch (err) {
        console.error("Error removing from DB", err);
      }
    } else {
      // Remove from LocalStorage
      localStorage.setItem("veloria_wishlist", JSON.stringify(updatedList));
    }
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === String(id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, isLoading }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
import mongoose, { Schema, model, models } from "mongoose";

console.log("[WishlistModel] Loading Wishlist model...");

// Structure of each wishlist item
const WishlistItemSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Schema.Types.Mixed, required: true },
    image: { type: String },
    category: { type: String },
    collectionPath: { type: String }, // Added this field to match your frontend data
  },
  { _id: false }
);

// Main Wishlist collection
const WishlistSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    items: [WishlistItemSchema],
  },
  { 
    timestamps: true,
    collection: 'wishlist' // <--- CRITICAL FIX: Forces singular collection name
  }
);

// Prevent recompilation error in development
export const Wishlist = models.Wishlist || model("Wishlist", WishlistSchema);
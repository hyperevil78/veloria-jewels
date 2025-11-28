import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    // Custom ID to match your frontend URLs (e.g. "1", "emerald-1")
    // We use this instead of the auto-generated MongoDB _id for routing
    id: { type: String, required: true, unique: true },
    
    name: { type: String, required: true },
    price: { type: Number, required: true }, 
    description: { type: String, required: true },
    
    // Categorization
    category: { type: String, required: true }, // e.g. "rings", "necklaces"
    subCategory: { type: String }, // e.g. "Engagement", "Gold"
    collectionGroup: { type: String }, // Stores the 'collection' field from your data
    
    // Media
    images: [{ type: String }],
    
    // Social Proof
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    
    // Navigation Helpers
    collectionPath: { type: String },
    collectionName: { type: String },
    
    // Technical Specs (Flexible Object for Material, Cut, Origin, etc.)
    details: { type: Schema.Types.Mixed }, 
    
    // Flags
    isNewArrival: { type: Boolean, default: false },
  },
  { 
    timestamps: true,
    collection: 'products' // Explicitly naming the collection
  }
);

// Prevent recompilation errors in Next.js development (Hot Reloading)
export const Product = models.Product || model("Product", ProductSchema);
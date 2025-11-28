import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";
// This imports the file you already have
import { allProducts } from "@/app/data/collections/product";

export async function POST() {
  console.log("------------------------------------------------");
  console.log("[SEED API] 🚀 Starting Seed Process...");

  try {
    await connectDB();
    console.log("[SEED API] ✅ Database connection established.");

    let createdCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    console.log(`[SEED API] 📦 Found ${allProducts.length} items in local file to process.`);

    for (const item of allProducts) {
      // 1. Prepare the data object
      // We map 'collection' to 'collectionGroup' because 'collection' is a reserved word in Mongoose
      const productData = {
        ...item,
        collectionGroup: item.collection, 
        isNewArrival: item.isNew,
      };

      // Remove the old keys so they don't cause schema errors
      // @ts-ignore
      delete productData.collection;
      // @ts-ignore
      delete productData.isNew;

      console.log(`[SEED API] 🔍 Processing ID: ${item.id} (${item.name})`);

      // 2. Check if product exists
      const existingProduct = await Product.findOne({ id: item.id });

      if (!existingProduct) {
        // Create new
        await Product.create(productData);
        console.log(`[SEED API] ✨ Created NEW product: ${item.id}`);
        createdCount++;
      } else {
        // Update existing (Overwrite with new data from file)
        await Product.updateOne({ id: item.id }, { $set: productData });
        console.log(`[SEED API] 🔄 Updated EXISTING product: ${item.id}`);
        updatedCount++;
      }
    }

    console.log("------------------------------------------------");
    console.log(`[SEED API] 🏁 Finished!`);
    console.log(`[SEED API] Created: ${createdCount}`);
    console.log(`[SEED API] Updated: ${updatedCount}`);
    console.log("------------------------------------------------");

    return NextResponse.json({ 
      message: "Database seeded successfully", 
      stats: { created: createdCount, updated: updatedCount } 
    });

  } catch (error: any) {
    console.error("[SEED API] ❌ FATAL ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
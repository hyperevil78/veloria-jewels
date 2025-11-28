import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server"; // Correct import
import { connectDB } from "@/lib/mongodb";
import { Wishlist } from "@/models/Wishlist";

export async function POST(req: NextRequest) {
  console.log("[API Merge] Request received");

  try {
    // 1. Authenticate User
    const { userId } = getAuth(req);
    
    if (!userId) {
      console.log("[API Merge] Unauthorized: No userId found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Get Local Items from Body
    const body = await req.json();
    const localItems = body.items || [];

    if (localItems.length === 0) {
      return NextResponse.json({ message: "No local items to merge" });
    }

    await connectDB();

    // 3. Find Existing Wishlist
    let userWishlist = await Wishlist.findOne({ userId });

    if (!userWishlist) {
      // If no wishlist exists, create one with local items
      console.log("[API Merge] Creating new wishlist for user");
      userWishlist = await Wishlist.create({
        userId,
        items: localItems
      });
    } else {
      // If wishlist exists, merge UNIQUE items only
      console.log("[API Merge] Merging into existing wishlist");
      
      // Create a Set of existing IDs for O(1) lookup
      const existingIds = new Set(userWishlist.items.map((i: any) => String(i.id)));
      
      // Filter out items that are already in the DB
      const newItems = localItems.filter((item: any) => !existingIds.has(String(item.id)));

      if (newItems.length > 0) {
        userWishlist.items.push(...newItems);
        await userWishlist.save();
      }
    }

    console.log("[API Merge] Success");
    return NextResponse.json({ success: true, items: userWishlist.items });

  } catch (error: any) {
    console.error("[API Merge] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
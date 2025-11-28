import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/mongodb";
import { Wishlist } from "@/models/Wishlist";

// GET Method
export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const wishlist = await Wishlist.findOne({ userId });
    
    return NextResponse.json({ items: wishlist?.items || [] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST Method (Add Item)
export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { item } = body;

    if (!item) return NextResponse.json({ error: "Missing item" }, { status: 400 });

    await connectDB();

    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      console.log(`[API] Creating NEW wishlist for ${userId}`);
      // Create and log the result
      const newDoc = await Wishlist.create({
        userId,
        items: [item],
      });
      console.log("[API] Created Doc ID:", newDoc._id);
    } else {
      console.log(`[API] Updating EXISTING wishlist for ${userId}`);
      // Check for duplicates using String comparison
      const exists = wishlist.items.some((i: any) => String(i.id) === String(item.id));
      
      if (!exists) {
        wishlist.items.push(item);
        const savedDoc = await wishlist.save();
        console.log("[API] Updated Doc, Items count:", savedDoc.items.length);
      } else {
        console.log("[API] Item already exists, skipping.");
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[API] POST Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE Method (Remove Item)
export async function DELETE(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { itemId } = body;

    await connectDB();
    const wishlist = await Wishlist.findOne({ userId });

    if (wishlist) {
      // Filter out the item
      const initialLength = wishlist.items.length;
      wishlist.items = wishlist.items.filter((i: any) => String(i.id) !== String(itemId));
      
      if (wishlist.items.length !== initialLength) {
        await wishlist.save();
        console.log(`[API] Removed item ${itemId}. Remaining: ${wishlist.items.length}`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
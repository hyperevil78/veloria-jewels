import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { id } = params;
    
    // Find product by your custom 'id' string (not MongoDB _id)
    const product = await Product.findOne({ id: id });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
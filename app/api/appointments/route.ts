import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/mongodb";
import { Appointment } from "@/models/appointment";
import mongoose from "mongoose"; // Import mongoose to check connection details

// --- POST: Create New Appointment ---
export async function POST(req: NextRequest) {
  console.log("------------------------------------------------");
  console.log("[API Appointment] 🚀 POST Request received");

  try {
    await connectDB();
    
    // --- DEBUG: LOG DATABASE DETAILS ---
    if (mongoose.connection.db) {
      console.log(`[DEBUG] 🗄️  Current Database Name: "${mongoose.connection.db.databaseName}"`);
    } else {
      console.log("[DEBUG] ⚠️  Database name is undefined (Check connection string)");
    }
    console.log(`[DEBUG] 📂 Target Collection Name: "${Appointment.collection.name}"`);
    // -----------------------------------

    const { userId } = getAuth(req);
    const body = await req.json();
    
    // Validation
    const requiredFields = ['firstName', 'lastName', 'email', 'date', 'time', 'type', 'service'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    const newAppointment = await Appointment.create({
      ...body,
      userId: userId || null,
    });

    console.log("[API Appointment] ✨ SUCCESS! Created Doc ID:", (newAppointment as any)._id);
    console.log("------------------------------------------------");

    return NextResponse.json({ 
      success: true, 
      message: "Appointment booked successfully",
      // Sending debug info back to frontend/network tab
      debug: {
        database: mongoose.connection.db?.databaseName,
        collection: Appointment.collection.name,
        id: (newAppointment as any)._id
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error("[API Appointment] ❌ Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// --- GET: Fetch User's Appointments ---
export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const appointments = await Appointment.find({ userId }).sort({ createdAt: -1 });

    return NextResponse.json({ appointments });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
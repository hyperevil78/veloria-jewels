import mongoose, { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema(
  {
    // --- Personal Details ---
    userId: { type: String }, // Optional: To link to a logged-in Clerk user
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    // --- Appointment Preferences ---
    type: { 
      type: String, 
      enum: ['instore', 'virtual'], 
      required: true 
    },
    service: { type: String, required: true }, 
    
    // --- Timing ---
    date: { type: String, required: true }, 
    time: { type: String, required: true }, 
    
    // --- Extras ---
    notes: { type: String }, 
    
    // --- System Fields ---
    status: { 
      type: String, 
      default: 'pending', 
      enum: ['pending', 'confirmed', 'completed', 'cancelled'] 
    }
  },
  { 
    timestamps: true,
    // CRITICAL FIX: Forces Mongoose to use the singular 'appointment' collection
    // If this line is removed, Mongoose will look for 'appointments'
    collection: 'appointment' 
  }
);

// Prevent recompilation errors in Next.js development
export const Appointment = models.Appointment || model("Appointment", AppointmentSchema);
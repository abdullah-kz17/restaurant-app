import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { restaurantSchema } from "../models/restaurantModel";
import { connectDB } from "@/app/libs/db";

// Handle GET request
export async function GET() {
  try {
    await connectDB();

    const data = await restaurantSchema.find();
    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Database connection or query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

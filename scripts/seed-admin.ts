import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
 
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

// Load .env.local
dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

async function seedAdmin() {
  try {
    await connectDB();
    const existingAdmin = await Admin.findOne({
      email: "admin@wubcs.edu.bd",
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    await Admin.create({
      name: "Super Admin",
      email: "admin@wubcs.edu.bd",
      password: "Admin@Wubcs@123",
    });

    console.log("🎉 Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedAdmin();

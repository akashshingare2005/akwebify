import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

console.log("🚀 createAdmin.js started");

async function createAdmin() {
  try {
    console.log("🔌 Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    const existingAdmin = await Admin.findOne({ username: "admin" });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = new Admin({
      username: "admin",
      email: "admin@akwebify.com",
      password: hashedPassword,
    });

    await admin.save();

    console.log("🎉 Admin created successfully");
    console.log("👉 Username: admin");
    console.log("👉 Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
}

createAdmin();


import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";



import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

export default router;   // 🔥 THIS LINE IS MANDATORY


// TEMP: create admin once
router.get("/create-admin", async (req,res)=>{
  const hash = await bcrypt.hash("admin123",10);
  await Admin.create({
    username:"admin",
    password:hash
  });
  res.send("Admin created");
});


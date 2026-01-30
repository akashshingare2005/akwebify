import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

export default router;   // 🔥 THIS LINE IS MANDATORY

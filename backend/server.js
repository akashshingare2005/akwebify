import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
console.log("DEBUG MONGO_URI =", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

// ===== EMAIL CONFIGURATION =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ===== CONTACT FORM EMAIL ENDPOINT =====
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Send email to your email address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVE_EMAIL || "akashshingare217@gmail.com",
      replyTo: email,
      subject: `New Message from ${name} - AkWebify Contact Form`,
      html: `
        <div style="font-family: Poppins, Arial; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 10px;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">📧 New Contact Message</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1;">
            <p style="margin: 0 0 15px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 15px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 15px 0;"><strong>Message:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Reply directly to ${email}</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message - AkWebify",
      html: `
        <div style="font-family: Poppins, Arial; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 10px;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">✅ Message Received!</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
            <p style="margin-top: 20px;">Your message:</p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
            <p style="margin-top: 20px;">Best regards,<br><strong>Akash Shingare</strong><br>AkWebify - Freelance Web Developer</p>
          </div>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      error: "Failed to send message. Please try again later.",
    });
  }
});

app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


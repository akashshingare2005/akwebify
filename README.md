# 🚀 AkWebify - Professional Freelance Website

A modern, responsive freelance portfolio website with email contact functionality. Built with Node.js/Express backend and vanilla JavaScript frontend.

## 📋 Features

✨ **Modern Design**
- Beautiful hero section with animated graphics
- Professional services showcase
- Portfolio gallery
- Client testimonials
- Smooth animations and transitions

📧 **Email Integration**
- Contact form with validation
- Auto-send emails to your inbox
- Confirmation emails to visitors
- Professional email templates

📱 **Responsive Design**
- Mobile-first approach
- Works on all devices
- Optimized for performance
- SEO-ready

🔐 **Secure & Fast**
- CORS-enabled
- Input validation
- Professional error handling

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Gmail account with app-specific password
- A code editor (VS Code recommended)

### Step 1: Clone or Extract the Project

```bash
cd c:\Users\NAGESH\OneDrive\Desktop\AkWebify_S
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install all required packages including Nodemailer for email functionality.

### Step 3: Setup Email Configuration

1. **Generate Gmail App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password provided by Google

2. **Create `.env` file in the backend folder:**

```bash
cd backend
```

Create a file named `.env` with the following content:

```
MONGO_URI=mongodb://localhost:27017/akwebify
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
RECEIVE_EMAIL=akashshingare217@gmail.com
PORT=5000
```

**Replace:**
- `your-gmail@gmail.com` with your Gmail address
- `your-16-character-app-password` with the app password from Google
- `akashshingare217@gmail.com` with your receiving email

### Step 4: Start MongoDB (Optional - only if using orders/admin features)

If you don't have MongoDB running locally and want to skip it:
```bash
# MongoDB connection is optional. If not running, some features won't work but contact form will.
```

### Step 5: Start the Backend Server

```bash
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected (if MongoDB is running)
```

The backend is now running at: **http://localhost:5000**

### Step 6: Open the Frontend

1. Open the file explorer and navigate to:
   ```
   c:\Users\NAGESH\OneDrive\Desktop\AkWebify_S\frontend
   ```

2. Right-click on `index.html` and select **"Open with" → "Your Browser"**

   Or simply double-click `index.html`

3. The website will open at:
   ```
   file:///c:/Users/NAGESH/OneDrive/Desktop/AkWebify_S/frontend/index.html
   ```

---

## 🌐 Direct Browser Links

### Frontend (Open in Browser)
```
file:///c:/Users/NAGESH/OneDrive/Desktop/AkWebify_S/frontend/index.html
```

### Backend API (for testing)
```
http://localhost:5000
```

---

## 📝 Using the Contact Form

1. **Fill out the form** with your details
2. **Click "Send Message"**
3. **Two things happen:**
   - ✅ An email is sent to **akashshingare217@gmail.com**
   - ✅ A confirmation email is sent to the visitor
4. **Success message** appears on the website

### Email Format Received:
- **Subject:** New Message from [Name] - AkWebify Contact Form
- **Body:** Professional HTML email with visitor details and message

---

## 🚀 Quick Start Commands

### Terminal 1: Start Backend
```bash
cd c:\Users\NAGESH\OneDrive\Desktop\AkWebify_S\backend
npm install
npm start
```

### Terminal 2: Open Frontend
```bash
# Navigate to frontend folder and open index.html in browser
# Or use the direct link above
```

---

## 📧 Testing the Contact Form

1. Go to the website (http://localhost:5000/index.html or file:// link)
2. Scroll to the "Contact" section
3. Fill in:
   - **Name:** John Doe
   - **Email:** john@example.com
   - **Project Title:** Custom Website
   - **Message:** I'm interested in building a website for my business

4. Click **"Send Message"**

5. Check **akashshingare217@gmail.com** inbox for the email ✅

---

## 🔧 Troubleshooting

### ❌ "Network error. Backend server not running"
- Make sure you ran `npm start` in the backend folder
- Verify port 5000 is not in use
- Check Windows Firewall settings

### ❌ "Failed to send message - Email error"
- Verify `.env` file has correct Gmail credentials
- Check if you generated an App Password (not regular password)
- Ensure Gmail account allows "Less secure apps" or use App Passwords

### ❌ "MongoDB Connection Error"
- MongoDB is optional for contact form
- The contact form will work without MongoDB
- This error won't prevent email from being sent

### ❌ Contact form shows no response
- Open browser Developer Tools (F12)
- Go to Console tab
- Send the form again and check for errors
- Verify backend server is running on http://localhost:5000

---

## 📂 Project Structure

```
AkWebify_S/
│
├── backend/
│   ├── package.json           # Node dependencies
│   ├── server.js              # Main server file with email endpoint
│   ├── .env                   # Your email configuration (CREATE THIS)
│   ├── .env.example           # Example configuration
│   └── ...other files
│
├── frontend/
│   ├── index.html             # Main page with all sections
│   ├── contact.html           # Alternative contact page
│   ├── css/
│   │   ├── style.css          # Main styles (UPDATED - Modern design)
│   │   ├── animations.css     # Animations
│   │   └── responsive.css     # Mobile styles
│   ├── js/
│   │   ├── main.js            # Navigation & interactions
│   │   ├── form-handler.js    # Contact form with email (UPDATED)
│   │   └── animations.js      # Scroll animations
│   └── ...other files
```

---

## 🎨 Customization

### Change Your Name/Branding
Edit `frontend/index.html` and replace:
- "Akash Shingare" with your name
- "👨‍💻" emoji with your preference
- Contact information with yours

### Change Colors
Edit `frontend/css/style.css` and modify the `:root` variables:
```css
:root {
  --primary: #6366f1;       /* Main color */
  --secondary: #10b981;     /* Secondary color */
  --dark: #1f2937;          /* Dark text */
  --light: #f9fafb;         /* Light background */
}
```

### Update Services
Edit `frontend/index.html` - Services section to list your actual services

### Update Portfolio
Edit `frontend/index.html` - Portfolio section to showcase your work

---

## 🌍 Deployment (Optional)

### Deploy Backend to Heroku
```bash
# Install Heroku CLI first
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy Frontend to Vercel
```bash
# Install Vercel CLI
npm install -g vercel
cd frontend
vercel
```

---

## 📞 Support

If you encounter any issues:
1. Check the Troubleshooting section above
2. Verify `.env` file configuration
3. Ensure backend server is running
4. Check browser console for errors (F12)

---

## 📋 Checklist Before Going Live

- [ ] Update name and personal information
- [ ] Add your real projects to portfolio
- [ ] Update skills and services
- [ ] Change color scheme if desired
- [ ] Add your social media links
- [ ] Test contact form thoroughly
- [ ] Check mobile responsiveness
- [ ] Update phone number and email
- [ ] Add your Instagram handle

---

## ✨ Features Overview

### Homepage
- Hero section with call-to-action
- Services showcase (6 services)
- Skills & tech stack
- Portfolio gallery (3 projects)
- Client testimonials
- Email signup section
- Contact form

### Contact Form Features
- Full name validation
- Email validation
- Project title field
- Message textarea
- Real-time error messages
- Success/error feedback
- Loading state during submission

### Backend API
- **POST /api/contact** - Send contact form emails
  - Validates all fields
  - Sends to your email
  - Sends confirmation to visitor
  - Returns success/error response

---

## 🚀 Summary

**To run the website:**
1. `cd backend && npm install && npm start` (Terminal 1)
2. Open `frontend/index.html` in browser (Terminal 2)
3. Fill contact form and submit
4. Check your email for messages ✅

**That's it!** Your professional freelance website is now running! 🎉

---

**Created with ❤️ for freelancers and entrepreneurs**

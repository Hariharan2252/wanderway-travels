# 🌍 WanderWay Travels – Travel & Tourism Platform

A modern, responsive travel booking web application that helps users explore destinations, view curated packages, and book trips seamlessly using **React** and **Firebase**.

---

## 🚀 Features

### 🔐 Authentication System
- Secure **Login & Signup** using **Firebase Authentication**

### 🧭 Destination Discovery
- Browse curated travel destinations with pricing & ratings

### 📦 Package Details
- Detailed itinerary, highlights, and pricing breakdown

### 📝 Online Booking
- Book trips with traveler details and date selection

### 📊 Admin Utilities
- Firestore seeding & booking management

### 🌙 Modern UI/UX
- Animated components
- Dark-mode friendly design
- Fully responsive layout

---

## 📸 Preview
> _(Add screenshots or screen recordings of the dashboard, booking page, and package details here)_

---

## 📂 Folder Structure

wanderway-travels/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── home/
│ │ │ ├── Header.jsx
│ │ │ └── Footer.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Destinations.jsx
│ │ │ ├── PackageDetails.jsx
│ │ │ ├── Booking.jsx
│ │ │ └── AdminSeed.jsx
│ │ ├── firebase/
│ │ │ ├── firebaseConfig.js
│ │ │ └── auth.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── package.json



---

## 🔧 Technologies Used

| Technology       | Description                          |
|------------------|--------------------------------------|
| React.js         | Frontend UI development              |
| Firebase Auth    | User authentication                  |
| Firestore DB    | Cloud NoSQL database                 |
| Tailwind CSS    | Styling & responsive UI              |
| Framer Motion   | Animations & transitions             |
| Vite             | Fast development server & bundler    |

---

## 🔑 User Flow

### 1️⃣ Guest User
Can:
- View home page & featured destinations
- Browse travel packages  
- ❌ Restricted from booking without login

### 2️⃣ Authenticated User
Can:
- Book travel packages
- View booking confirmation
- Access profile/dashboard

### 3️⃣ Admin (Internal)
Can:
- Seed Firestore with initial data
- View all bookings (admin routes)

---

## 📥 Getting Started

```bash
git clone https://github.com/your-username/wanderway-travels.git
cd wanderway-travels/frontend
npm install
npm run dev

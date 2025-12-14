🌍 WanderWay Travels – Travel & Tourism Platform

A modern, full-stack travel booking web application that allows users to explore destinations, view curated travel packages, and book trips seamlessly with secure authentication and real-time database integration.

🚀 Features

🔐 Authentication System

User Sign Up & Login using Firebase Authentication

🏝️ Explore Destinations

Browse handpicked domestic & international travel packages

📦 Package Details

View itinerary, pricing, highlights, and ratings

📝 Online Booking System

Book trips with traveler details and date selection

📊 User Dashboard

View profile and booking history

🛠️ Admin Features

Seed data to Firestore

View all bookings (Admin panel)

🎨 Premium UI/UX

Responsive design

Smooth animations using Framer Motion

Dark-mode friendly UI elements

📸 Preview

(Add screenshots or a screen recording of the Home page, Booking page, and Dashboard here for better impact)

📂 Folder Structure
wanderway-travels/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── PackageDetails.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── AdminSeed.jsx
│   │   │   └── AdminBookings.jsx
│   │   ├── firebase/
│   │   │   ├── firebaseConfig.js
│   │   │   ├── auth.js
│   │   │   └── firestore.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md

🔧 Technologies Used
Technology	Description
React.js	Frontend framework
Vite	Fast development & build tool
Firebase Auth	User authentication
Firestore DB	Cloud NoSQL database
Tailwind CSS	Responsive & modern UI styling
Framer Motion	Animations & transitions
React Router DOM	Client-side routing
👥 User Roles & Flow
🧳 Guest User

Can:

View homepage and destinations

View package details

Cannot:

Book packages without login

👤 Authenticated User

Can:

Book travel packages

View profile & booking history

Access protected routes

🛠️ Admin

Can:

Seed Firestore data

View all user bookings

🔐 Authentication Flow

User opens the app

Redirected to Login / Signup

On successful login:

Redirected to Dashboard (Home)

Protected routes secured using PrivateRoute

Guest routes blocked for logged-in users

📥 Getting Started
Clone the Repository
git clone https://github.com/your-username/wanderway-travels.git
cd wanderway-travels/frontend

Install Dependencies
npm install

Configure Firebase

Create a Firebase project

Enable:

Authentication (Email/Password)

Firestore Database

Add your Firebase config to:

src/firebase/firebaseConfig.js

Run the App
npm run dev


App will run at:

http://localhost:5173

📊 Firestore Collections Used

destinations

bookings

offers

testimonials

users (optional)

✨ Future Enhancements

🌙 Full Dark Mode toggle

💳 Payment gateway integration

🧭 AI-based travel recommendations

📱 Mobile-first PWA support

🗺️ Map-based destination explorer

🧠 Learning Outcomes

Implemented secure authentication flow

Designed scalable Firestore schema

Built admin seeding & management tools

Improved UI/UX with animations

Applied route protection & role-based access

👨‍💻 Author

Hariharan N
Frontend & Full-Stack Developer
📧 hariharannatarajan18@gmail.com
🔗 https://www.linkedin.com/in/hariharan-n-606a18328/
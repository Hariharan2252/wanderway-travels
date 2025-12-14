import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { authStateListener } from "./firebase/auth";

import AdminSeed from "./pages/AdminSeed";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import BookingSuccess from "./pages/BookingSuccess";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminBookings from "./pages/AdminBookings";


// 🔒 PRIVATE ROUTE WRAPPER
function PrivateRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = authStateListener(setUser);
    return () => unsub();
  }, []);

  if (user === undefined) return <div>Checking login...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

// 🔓 GUEST ONLY ROUTE
function GuestRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = authStateListener(setUser);
    return () => unsub();
  }, []);

  if (user === undefined) return <div>Checking login...</div>;
  return !user ? children : <Navigate to="/" replace />;
}


// 🚀 MAIN APP
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Routes>

          {/* LOGIN FIRST — GUESTS ONLY */}
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <GuestRoute>
                <Signup />
              </GuestRoute>
            }
          />

          {/* HOME → PRIVATE */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* PUBLIC PAGES */}
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/booking-success/:id" element={<BookingSuccess />} />

          {/* PRIVATE ROUTES */}
          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/destinations"
            element={
              <PrivateRoute>
                <Destinations />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/bookings"
            element={
              <PrivateRoute>
                <AdminBookings />
              </PrivateRoute>
            }
          />

          {/* ADMIN SEED PAGE */}
          <Route path="/admin/seed" element={<AdminSeed />} />

        </Routes>
      </main>
    </div>
  );
}

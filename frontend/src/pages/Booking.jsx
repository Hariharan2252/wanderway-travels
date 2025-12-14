import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function Booking() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Fetch Package
  useEffect(() => {
    async function loadPackage() {
      try {
        const snap = await getDoc(doc(db, "destinations", id));
        if (snap.exists()) {
          setPkg(snap.data());
        } else {
          setPkg(null);
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }

    loadPackage();
  }, [id]);

  // Update form
  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate & Submit
  const submitBooking = async () => {
    if (!form.name || !form.email || !form.phone || !form.date) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    try {
      const finalData = {
        ...form,
        travelers: Number(form.travelers),
        packageId: id,
        packageTitle: pkg.title,
        totalPrice: pkg.price * Number(form.travelers),
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "bookings"), finalData);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      setError("Error submitting your booking. Please try again.");
    }
  };

  if (loading)
    return <div className="p-10 text-center text-slate-600 text-lg">⏳ Loading package...</div>;

  if (!pkg)
    return <div className="p-10 text-center text-red-600 text-xl font-semibold">Package not found.</div>;

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="p-12 max-w-xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-extrabold text-green-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          🎉 Booking Confirmed!
        </motion.h1>

        <p className="mt-4 text-gray-700 text-lg">
          We’ve received your booking request. Our team will contact you shortly.
        </p>

        <motion.div
          className="mt-10 p-6 bg-white rounded-xl shadow-md border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-left">
            <p className="font-semibold">{pkg.title}</p>
            <p className="text-gray-500">{form.travelers} Traveler(s)</p>
            <p className="font-bold mt-2 text-indigo-600">
              Total: ₹{(pkg.price * form.travelers).toLocaleString()}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-slate-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Book Your Trip: {pkg.title}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

        {/* FORM SECTION */}
        <motion.div
          className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-xl font-semibold mb-4">Traveler Information</h2>

          <div className="space-y-5">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={update}
            />

            <input
              name="email"
              placeholder="Email Address"
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={update}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              onChange={update}
            />

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  min="1"
                  value={form.travelers}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  onChange={update}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  onChange={update}
                />
              </div>
            </div>

            {error && <p className="text-red-600 font-semibold">{error}</p>}

            <button
              onClick={submitBooking}
              className="mt-5 w-full px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </motion.div>

        {/* SUMMARY SECTION */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg border"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={pkg.img}
            alt={pkg.title}
            className="rounded-xl h-44 w-full object-cover mb-4"
          />

          <h2 className="text-xl font-bold">{pkg.title}</h2>
          <p className="text-sm text-gray-600">{pkg.subtitle}</p>

          <div className="mt-4 border-t pt-4 space-y-2">
            <p className="flex justify-between text-gray-800">
              <span>Price per person:</span>
              <span>₹{pkg.price.toLocaleString()}</span>
            </p>

            <p className="flex justify-between text-gray-800">
              <span>Travelers:</span>
              <span>{form.travelers}</span>
            </p>

            <p className="flex justify-between text-indigo-600 font-bold text-lg mt-2">
              <span>Total:</span>
              <span>
                ₹{(pkg.price * form.travelers).toLocaleString()}
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

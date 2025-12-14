import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPackage() {
      const snap = await getDoc(doc(db, "destinations", id));
      if (snap.exists()) setPkg(snap.data());
      setLoading(false);
    }
    loadPackage();
  }, [id]);

  if (loading)
    return <div className="p-10 text-center text-lg">Loading package...</div>;

  if (!pkg)
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Package not found.
      </div>
    );

  return (
    <div className="bg-gray-50">
      
      {/* FULL SCREEN RESPONSIVE HERO */}
      <div className="relative w-full max-h-[75vh] overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src={pkg.img}
          alt={pkg.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {pkg.title}
          </motion.h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="lg:col-span-2 space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* ABOUT */}
          <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-800">About This Package</h2>
            <p className="mt-3 text-gray-700 text-lg">{pkg.subtitle}</p>
          </section>

          {/* ITINERARY */}
          <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-800">Itinerary</h2>

            <ul className="mt-4 space-y-4">
              {[
                "🛬 Day 1: Arrival & hotel check-in",
                "🏖️ Day 2: Local sightseeing & adventure activities",
                "🍽️ Day 3: Cultural tour + special dinner",
                "🛍️ Day 4: Free day for shopping",
                "✈️ Day 5: Return departure",
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg border-l-4 border-indigo-600 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit sticky top-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold">{pkg.title}</h2>
          <p className="text-gray-600">{pkg.subtitle}</p>

          <div className="mt-5 border-t pt-5">
            <p className="font-extrabold text-4xl text-indigo-600">
              ₹{pkg.price.toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm">Per traveler</p>
          </div>

          <Link
            to={`/book/${id}`}
            className="mt-6 block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Book Now
          </Link>

          <div className="mt-8 space-y-3 text-gray-700 text-sm">
            <p>⭐ Rating: {pkg.rating}</p>
            <p>🌍 Category: {pkg.category}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

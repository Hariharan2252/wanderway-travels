import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("all");

  const filters = ["all", "international", "domestic"];

  // Fetch Data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "destinations"));
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setDestinations(data);
      setFiltered(data);
    };

    fetchData();
  }, []);

  // Filter Logic
  useEffect(() => {
    if (filter === "all") {
      setFiltered(destinations);
    } else {
      setFiltered(destinations.filter((d) => d.category === filter));
    }
  }, [filter, destinations]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-800">Explore Destinations</h1>
      <p className="text-slate-500 mt-2 max-w-xl">
        Find your perfect getaway from handpicked destinations around the world.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mt-6">
        {filters.map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition 
              ${filter === f ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"}
            `}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* DESTINATIONS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filtered.map((d, index) => (
          <motion.div
            key={d.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <motion.img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-800">{d.title}</h2>
              <p className="text-slate-500 text-sm">{d.subtitle}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-indigo-600 font-bold text-lg">₹{d.price.toLocaleString()}</span>

                <Link
                  to={`/package/${d.id}`}
                  className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm hover:bg-indigo-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

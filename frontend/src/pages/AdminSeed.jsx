import React, { useState } from "react";
import { db } from "../firebase"; 
import { collection, setDoc, doc } from "firebase/firestore";

export default function AdminSeed() {
  const [status, setStatus] = useState("");

  const seedData = async () => {
    try {
      setStatus("Seeding Firestore...");

      // --------- DESTINATIONS ----------
      const destinations = [
        {
          id: "bali",
          title: "Bali, Indonesia",
          subtitle: "Beaches & Culture",
          price: 34999,
          img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format",
          category: "international",
          rating: 4.8
        },
        {
          id: "swiss",
          title: "Swiss Alps",
          subtitle: "Mountains & Ski",
          price: 59999,
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format",
          category: "international",
          rating: 4.9
        },
        {
          id: "paris",
          title: "Paris, France",
          subtitle: "Romance & Art",
          price: 49999,
          img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format",
          category: "international",
          rating: 4.7
        }
      ];

      for (let d of destinations) {
        await setDoc(doc(db, "destinations", d.id), d);
      }

      // --------- OFFERS ----------
      const offers = [
        {
          id: "offer1",
          title: "Early Bird -10%",
          desc: "Book 60+ days in advance",
          color: "from-rose-400 to-red-500"
        },
        {
          id: "offer2",
          title: "Family Pack",
          desc: "Kids travel free on select dates",
          color: "from-green-400 to-teal-400"
        },
        {
          id: "offer3",
          title: "Weekend Getaways",
          desc: "Short trips under 3 days",
          color: "from-yellow-300 to-orange-400"
        }
      ];

      for (let o of offers) {
        await setDoc(doc(db, "offers", o.id), o);
      }

      // --------- TESTIMONIALS ----------
      const testimonials = [
        { id: "t1", name: "Priya R", text: "Best travel experience!", city: "Chennai" },
        { id: "t2", name: "Arjun M", text: "Excellent service!", city: "Bengaluru" },
        { id: "t3", name: "Sara L", text: "Very family-friendly!", city: "Mumbai" }
      ];

      for (let t of testimonials) {
        await setDoc(doc(db, "testimonials", t.id), t);
      }

      setStatus("🔥 Firestore seeded successfully!");

    } catch (err) {
      console.error(err);
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">Admin Firestore Seeder</h1>
      <p className="mt-2 text-gray-700">Click the button below to insert all sample data.</p>

      <button
        onClick={seedData}
        className="mt-5 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Seed Firestore
      </button>

      {status && (
        <p className="mt-5 font-semibold text-lg">{status}</p>
      )}
    </div>
  );
}

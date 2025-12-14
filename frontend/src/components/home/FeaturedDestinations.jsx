import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sample = [
  {
    id: "bali",
    title: "Bali, Indonesia",
    subtitle: "Beaches & Culture",
    price: "₹34,999",
    img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "swiss",
    title: "Swiss Alps",
    subtitle: "Mountains & Ski",
    price: "₹59,999",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "paris",
    title: "Paris, France",
    subtitle: "Romance & Art",
    price: "₹49,999",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="mt-16">
      {/* Heading */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-slate-800">Featured Destinations</h2>
        <Link to="/destinations" className="text-sm text-indigo-600 hover:underline">
          View all
        </Link>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sample.map((d, index) => (
          <motion.article
            key={d.id}
            className="relative rounded-2xl overflow-hidden shadow-xl bg-white group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            {/* Image with zoom animation */}
            <div className="overflow-hidden h-56">
              <motion.img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Card content */}
            <div className="p-5 bg-white">
              <h3 className="font-semibold text-lg text-slate-800">{d.title}</h3>
              <p className="text-sm text-slate-500">{d.subtitle}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-indigo-600 font-bold">{d.price}</div>

                <Link
                  to={`/package/${d.id}`}
                  className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-all"
                >
                  Explore
                </Link>
              </div>
            </div>

            {/* Top gradient border animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-400/60 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

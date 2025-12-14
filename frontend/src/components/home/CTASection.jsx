import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      className="relative mt-20 mb-24 rounded-3xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-fuchsia-500 opacity-95"></div>

      {/* Floating Glow Orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-fuchsia-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-indigo-400 rounded-full opacity-25 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 p-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
              Ready to discover your next escape?
            </h3>

            <p className="mt-3 text-white/90 text-lg">
              Explore curated packages or get a custom itinerary crafted by our travel experts.
            </p>
          </motion.div>

          {/* Buttons Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/destinations"
              className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Explore Packages
            </Link>

            <Link
              to="/contact"
              className="border border-white/40 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 backdrop-blur-sm transition"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

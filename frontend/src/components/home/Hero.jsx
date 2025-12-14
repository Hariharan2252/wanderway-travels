import React from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full">

      {/* FIX: prevent background from expanding page */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-fuchsia-500 transform-gpu -skew-y-2 origin-top-left opacity-95 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* FIXED RESPONSIVE CONTAINER */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
              WanderWay Travels
            </h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-white/90 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Discover memorable journeys, curated packages, and local experiences — plan your next adventure with effortless booking and joyful discovery.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <SearchBar />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-6 text-sm text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  ✈️
                </div>
                <div>
                  <div className="font-semibold">Handpicked Packages</div>
                  <div className="text-xs">Budget, Luxury, Adventure</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  🏨
                </div>
                <div>
                  <div className="font-semibold">Secure Booking</div>
                  <div className="text-xs">Safe & flexible payments</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
                alt="Beach"
                className="w-full h-80 sm:h-96 object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
              />

              <motion.div
                className="absolute left-6 bottom-6 bg-white/20 px-4 py-3 rounded-2xl shadow-lg backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="text-sm text-white/95 font-bold">Bali, Indonesia</div>
                <div className="text-xs text-white/80">7 days · From ₹34,999</div>
              </motion.div>
            </motion.div>

            {/* FIX: prevent plane from expanding layout */}
            <motion.div
              className="absolute -left-32 -top-10 pointer-events-none z-20"
              animate={{ x: ["0%", "100%"], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg width="160" height="60" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 40 L60 35 L80 20 L120 30 L160 18 L210 22" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* bottom wave */}
      <motion.div
        className="absolute -bottom-4 left-0 right-0 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <svg viewBox="0 0 1440 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,11,576,5.3C672,0,768,0,864,10.7C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0..." />
        </svg>
      </motion.div>
    </section>
  );
}

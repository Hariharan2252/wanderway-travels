import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/home/Hero";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import Offers from "../components/home/Offers";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#f4f7ff] via-[#eef3ff] to-[#e7efff] text-gray-800">

      {/* AURORA LIGHT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[650px] h-[650px] bg-[#8fb4ff] opacity-25 blur-[140px] top-[-180px] right-[-160px]"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#ffc8f9] opacity-25 blur-[200px] bottom-[-180px] left-[-180px]"></div>
      </div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-10 overflow-hidden"
      >
        <div className="rounded-3xl bg-gradient-to-br from-white/60 via-white/70 to-white/50 
                        backdrop-blur-2xl border border-white/40 shadow-[0_0_60px_-20px_rgba(150,150,200,0.4)] p-2">
          <Hero />
        </div>
      </motion.div>

      {/* BODY CONTENT */}
      <main className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-28">

        {/* Featured Destinations */}
        <motion.div
          className="rounded-3xl p-10 backdrop-blur-xl bg-white/70 border border-white/60 
                     shadow-[0_0_50px_-20px_rgba(150,150,200,0.35)] hover:shadow-[0_0_80px_-10px_rgba(150,150,200,0.45)]
                     transition-all duration-500"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <FeaturedDestinations />
        </motion.div>

        {/* Offers */}
        <motion.div
          className="rounded-3xl p-10 backdrop-blur-xl bg-white/70 border border-white/60 
                     shadow-[0_0_40px_-15px_rgba(255,193,107,0.35)] hover:shadow-[0_0_80px_-12px_rgba(255,193,107,0.5)]
                     transition-all duration-500"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Offers />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="rounded-3xl p-10 backdrop-blur-xl bg-white/70 border border-white/60 
                     shadow-[0_0_50px_-15px_rgba(131,183,255,0.4)] hover:shadow-[0_0_80px_-12px_rgba(131,183,255,0.55)]
                     transition-all duration-500"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="rounded-3xl p-10 backdrop-blur-xl bg-gradient-to-br from-[#f6e4ff]/60 via-white/70 to-[#e7f0ff]/70 
                     border border-white/60 shadow-[0_0_90px_-25px_rgba(190,140,255,0.4)] mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CTASection />
        </motion.div>

      </main>
    </div>
  );
}

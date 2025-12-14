import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Priya R",
    text: "Best travel experience — WanderWay made our honeymoon perfect!",
    city: "Chennai"
  },
  {
    name: "Arjun M",
    text: "Seamless booking and excellent guides.",
    city: "Bengaluru"
  },
  {
    name: "Sara L",
    text: "Curated packages for family trips. Highly recommend!",
    city: "Mumbai"
  }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((p) => (p + 1) % data.length);
  const prev = () => setIdx((p - 1 + data.length) % data.length);

  const testimonial = data[idx];

  return (
    <section className="mt-20 relative">
      {/* section heading */}
      <motion.h2
        className="text-2xl font-bold text-slate-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Happy Travelers
      </motion.h2>

      {/* glow background */}
      <div className="absolute -top-10 right-10 w-40 h-40 bg-indigo-400 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute -bottom-10 left-0 w-40 h-40 bg-fuchsia-400 blur-3xl opacity-20 rounded-full"></div>

      {/* main card */}
      <motion.div
        className="mt-10 bg-white rounded-3xl p-8 shadow-xl flex items-center gap-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* left button */}
        <button
          onClick={prev}
          className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition shadow-sm"
        >
          ◀
        </button>

        {/* testimonial text */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-slate-700 italic text-lg leading-relaxed">
                “{testimonial.text}”
              </p>

              <motion.div
                className="mt-4 text-sm font-semibold text-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {testimonial.name} •{" "}
                <span className="text-slate-500">{testimonial.city}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* right button */}
        <button
          onClick={next}
          className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition shadow-sm"
        >
          ▶
        </button>

        {/* subtle fancy gradient overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-indigo-50/0 to-indigo-100/20 opacity-40" />
      </motion.div>
    </section>
  );
}

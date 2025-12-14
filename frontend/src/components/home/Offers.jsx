import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Early Bird -10%",
    desc: "Book 60+ days in advance",
    color: "from-rose-400 to-red-500"
  },
  {
    id: 2,
    title: "Family Pack",
    desc: "Kids travel free on select dates",
    color: "from-green-400 to-teal-400"
  },
  {
    id: 3,
    title: "Weekend Getaways",
    desc: "Short trips under 3 days",
    color: "from-yellow-300 to-orange-400"
  }
];

export default function Offers() {
  return (
    <section className="mt-20 relative">
      {/* Section Heading */}
      <motion.h2
        className="text-2xl font-bold text-slate-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hot Offers
      </motion.h2>

      {/* Glow background */}
      <div className="absolute -right-16 top-0 w-40 h-40 bg-indigo-400 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute -left-16 bottom-8 w-44 h-44 bg-purple-400 blur-3xl opacity-20 rounded-full"></div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((o, i) => (
          <motion.div
            key={o.id}
            className="relative rounded-3xl p-1 bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            {/* gradient border glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-60 transition"
              style={{
                background: `linear-gradient(135deg, ${o.color
                  .replace('from-', '')
                  .replace('to-', '')
                  .split(" ")[0]}, ${o.color
                  .replace('from-', '')
                  .replace('to-', '')
                  .split(" ")[1]})`
              }}
            ></div>

            <div className="relative bg-white dark:bg-white/10 rounded-3xl p-6 z-10">
              <div
                className={`bg-gradient-to-br ${o.color} text-white p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all`}
              >
                <div className="text-sm uppercase font-semibold tracking-wide">
                  {o.title}
                </div>
                <div className="mt-3 text-xs opacity-90">{o.desc}</div>
                <div className="mt-5 text-sm font-semibold">Grab now →</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Water Level", value: 2.4, suffix: "m", icon: "🌊" },
  { label: "Rain Intensity", value: 45, suffix: "mm/h", icon: "🌧️" },
  { label: "AI Risk Status", value: 0, suffix: "LOW", icon: "⚡", isText: true },
  { label: "Active Sensors", value: 128, suffix: "", icon: "📡" },
];

function AnimatedCounter({ value, suffix, isText }: { value: number; suffix: string; isText?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  if (isText) {
    return <span className="text-green-400">LOW</span>;
  }

  return (
    <span>
      {displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
            <span className="gradient-text">Live Monitoring</span>
          </h2>
          <p className="text-white/40 text-sm">Real-time data dari sensor IoT di seluruh kota</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-5 text-center group cursor-default"
            >
              <div className="text-2xl mb-3 opacity-60">{stat.icon}</div>
              <div className="text-white/40 text-xs mb-2">{stat.label}</div>
              <div className="text-2xl font-semibold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isText={stat.isText} />
              </div>
              <div className="mt-3 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
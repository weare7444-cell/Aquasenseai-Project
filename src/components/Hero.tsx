"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Sparkles, Box, Compass } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="glow-spot glow-cyan -top-40 -left-40" />
      <div className="glow-spot glow-blue top-1/2 -right-40" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 cursor-pointer"
            onClick={() => scrollToSection("#about")}
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400/80 text-xs font-medium">Indonesia's Smart City Solution</span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            <span className="text-white">Smart Water</span>
            <br />
            <span className="gradient-text">Monitoring</span>
            <br />
            <span className="text-white">for Safer Cities</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg mb-8 max-w-lg leading-relaxed"
          >
            Platform monitoring air berbasis IoT dan AI untuk deteksi dini banjir dan mitigasi di kota cerdas Kepulauan Riau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/hardware-preview" className="block">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(14, 165, 233, 0.6), 0 0 100px rgba(14, 165, 233, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 px-8 py-4 rounded-2xl font-semibold text-white cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Box className="w-5 h-5" />
                    </motion.span>
                    Launch 3D Preview
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ["200%", "-200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-md group-hover:opacity-80 transition-opacity" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.03, borderColor: "rgba(14, 165, 233, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden group flex items-center gap-3 glass px-8 py-4 rounded-2xl font-medium text-white cursor-pointer border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <Compass className="w-5 h-5 text-cyan-400" />
                <span className="relative z-10">Explore System</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-500/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.button
              onClick={() => scrollToSection("#services")}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-medium text-white cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#dashboard")}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group flex items-center gap-2 glass px-6 py-3 rounded-full font-medium text-white cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="relative z-10">View Demo</span>
              <motion.div
                className="absolute inset-0 bg-cyan-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 glass-card rounded-2xl p-5 neon-glow gradient-border cursor-pointer"
            onClick={() => scrollToSection("#dashboard")}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/30 text-xs font-mono">Dashboard v2.0</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Water Level", value: "2.4m", color: "cyan" },
                { label: "Rain Intensity", value: "45mm/h", color: "blue" },
                { label: "Risk Status", value: "LOW", color: "green" },
                { label: "Active Sensors", value: "128", color: "purple" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-3 cursor-pointer"
                >
                  <div className="text-white/40 text-[10px] mb-1">{stat.label}</div>
                  <div className={`text-lg font-semibold ${
                    stat.color === "cyan" ? "text-cyan-400" :
                    stat.color === "blue" ? "text-blue-400" :
                    stat.color === "green" ? "text-green-400" : "text-purple-400"
                  }`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-xl p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/40 text-xs">Water Level History</span>
                <span className="text-green-400/60 text-[10px]">● LIVE</span>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[35, 50, 45, 60, 40, 55, 50, 60, 45, 55, 50, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.7 + i * 0.05, duration: 0.4 }}
                    className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400/60 rounded-t"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#services")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5 cursor-pointer"
          aria-label="Scroll down"
        >
          <div className="w-1 h-1.5 bg-cyan-400/50 rounded-full" />
        </motion.button>
      </motion.div>
    </section>
  );
}
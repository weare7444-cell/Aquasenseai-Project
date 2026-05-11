"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Droplets, ArrowRight, ChevronRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function AboutProject() {
  return (
    <section id="about" className="relative py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 neon-glow text-center relative overflow-hidden group cursor-pointer"
            onClick={() => scrollToSection("#contact")}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
              >
                <Droplets className="w-7 h-7 text-white" />
              </motion.div>

              <h2 className="text-2xl font-semibold mb-4">
                <span className="gradient-text">AquaSense AI</span>
              </h2>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                AquaSense AI adalah startup teknologi berbasis IoT dan AI yang membantu monitoring kondisi air dan mitigasi banjir secara real-time untuk smart city di <span className="text-cyan-400">Batam</span> dan <span className="text-cyan-400">Kepulauan Riau</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-white/40 text-xs mb-6">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400/60" />
                  <span>Batam, Kep. Riau</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400/60" />
                  <span>University Project</span>
                </div>
              </div>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection("#contact");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium cursor-pointer group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all"
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
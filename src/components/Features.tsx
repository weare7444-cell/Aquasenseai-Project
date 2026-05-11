"use client";

import { motion } from "framer-motion";
import { BarChart3, Wifi, Brain, Cloud, Smartphone, Shield, ArrowUpRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const features = [
  { id: "analytics", icon: BarChart3, title: "Real-time Analytics", description: "Analisis data real-time dengan visualisasi interaktif.", cta: "#dashboard" },
  { id: "iot", icon: Wifi, title: "IoT Integration", description: "Integrasi seamless dengan berbagai sensor IoT.", cta: "#services" },
  { id: "ai", icon: Brain, title: "AI Forecasting", description: "Prediksi akurat berbasis machine learning.", cta: "#services" },
  { id: "cloud", icon: Cloud, title: "Cloud Dashboard", description: "Akses dashboard berbasis cloud dari mana saja.", cta: "#dashboard" },
  { id: "mobile", icon: Smartphone, title: "Mobile Responsive", description: "Tampilan responsif di semua device.", cta: "#contact" },
  { id: "emergency", icon: Shield, title: "Emergency Detection", description: "Deteksi dini situasi darurat otomatis.", cta: "#services" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 gradient-bg">
      <div className="glow-spot glow-cyan top-1/2 left-0" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">Powerful</span>
            <span className="gradient-text"> Features</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => scrollToSection(feature.cta)}
              className="glass-card rounded-xl p-5 group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                </motion.div>

                <h3 className="text-base font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>

                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 text-xs text-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Learn more
                  <ArrowUpRight className="w-3 h-3" />
                </motion.div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
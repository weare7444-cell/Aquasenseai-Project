"use client";

import { motion } from "framer-motion";
import { Droplets, Brain, Siren, ArrowUpRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const services = [
  {
    id: "smart-monitoring",
    icon: Droplets,
    title: "Smart Monitoring",
    description: "Sistem pemantauan real-time menggunakan sensor IoT untuk mengukur ketinggian air, curah hujan, dan kualitas air di seluruh kota.",
    color: "cyan",
    cta: "#features",
  },
  {
    id: "ai-prediction",
    icon: Brain,
    title: "AI Flood Prediction",
    description: "Algoritma machine learning yang menganalisis data historis dan real-time untuk memprediksi potensi banjir dengan akurasi tinggi.",
    color: "blue",
    cta: "#dashboard",
  },
  {
    id: "emergency-alert",
    icon: Siren,
    title: "Emergency Alert System",
    description: "Sistem notifikasi otomatis yang mengirimkan peringatan cepat ke masyarakat dan tim respons darurat saat terdeteksi potensi banjir.",
    color: "orange",
    cta: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 gradient-bg">
      <div className="glow-spot glow-cyan top-0 right-0" style={{ opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">Our</span>
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Solusi komprehensif untuk smart water management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => scrollToSection(service.cta)}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.color === "cyan" ? "bg-cyan-500/15" :
                  service.color === "blue" ? "bg-blue-500/15" :
                  "bg-orange-500/15"
                }`}
              >
                <service.icon className={`w-6 h-6 ${
                  service.color === "cyan" ? "text-cyan-400" :
                  service.color === "blue" ? "text-blue-400" :
                  "text-orange-400"
                }`} />
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(service.cta);
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 text-sm font-medium cursor-pointer ${
                  service.color === "cyan" ? "text-cyan-400 hover:text-cyan-300" :
                  service.color === "blue" ? "text-blue-400 hover:text-blue-300" :
                  "text-orange-400 hover:text-orange-300"
                }`}
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.div
                className={`mt-4 h-px bg-gradient-to-r from-transparent to-${
                  service.color === "cyan" ? "cyan" : service.color === "blue" ? "blue" : "orange"
                }-500/30 opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
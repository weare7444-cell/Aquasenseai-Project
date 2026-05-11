"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Mail, ArrowRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const developer = {
  name: "Muh Rayhan Hot Muft HS",
  nim: "2422015",
  email: "rayhan2006@gmail.com",
  description: "Mahasiswa pengembang konsep startup teknologi berbasis AI dan IoT untuk smart city monitoring.",
};

export default function AboutDeveloper() {
  return (
    <section className="relative py-20">
      <div className="glow-spot glow-blue top-0 right-0" style={{ opacity: 0.2 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">Project</span>
            <span className="gradient-text"> Developer</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 text-center group cursor-pointer hover:border-cyan-500/30 transition-all relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5"
              >
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {developer.name}
              </h3>

              <div className="flex items-center justify-center gap-1.5 text-cyan-400/70 text-xs mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="font-mono">NIM: {developer.nim}</span>
              </div>

              <p className="text-white/40 text-xs leading-relaxed mb-4">
                {developer.description}
              </p>

              <motion.button
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs text-white/70 hover:text-white cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                Contact Me
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
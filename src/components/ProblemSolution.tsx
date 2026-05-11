"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, BarChart3, Wifi, Brain, Bell, ArrowRight } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Banjir Frequent", desc: "Banjir rutin terjadi di kawasan padat penduduk saat musim hujan" },
  { icon: Clock, title: "Informasi Lambat", desc: "Penyebaran informasi bencana lambat dan tidak efisien" },
  { icon: BarChart3, title: "Monitoring Sulit", desc: "Pemantauan drainase dan kondisi air secara manual tidak efektif" },
];

const solutions = [
  { icon: Wifi, title: "Sensor IoT", desc: "Jaringan sensor otomatis di seluruh titik strategis kota" },
  { icon: Brain, title: "AI Prediction", desc: "Prediksi banjir berbasis machine learning dengan akurasi tinggi" },
  { icon: Bell, title: "Alert Notification", desc: "Notifikasi cepat ke masyarakat dan pihak berwenang" },
];

export default function ProblemSolution() {
  return (
    <section id="about" className="relative py-24">
      <div className="glow-spot glow-blue -top-20 -right-20" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="text-white">Problem</span>
            <span className="text-white/30 mx-3">→</span>
            <span className="gradient-text">Solution</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Masalah</h3>
            </div>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-xl p-4 border-l-2 border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <problem.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-red-400 transition-colors">{problem.title}</h4>
                      <p className="text-white/40 text-xs">{problem.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                <Brain className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Solusi</h3>
            </div>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -4 }}
                  className="glass-card rounded-xl p-4 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity rotate-180" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-cyan-400 transition-colors">{solution.title}</h4>
                      <p className="text-white/40 text-xs">{solution.desc}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <solution.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
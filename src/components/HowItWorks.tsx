"use client";

import { motion } from "framer-motion";
import { Wifi, Cpu, Cloud, LayoutDashboard, Bell } from "lucide-react";

const steps = [
  { icon: Wifi, title: "Sensor", color: "cyan" },
  { icon: Cpu, title: "Edge AI", color: "blue" },
  { icon: Cloud, title: "Cloud", color: "purple" },
  { icon: LayoutDashboard, title: "Dashboard", color: "green" },
  { icon: Bell, title: "Alert", color: "orange" },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">How It</span>
            <span className="gradient-text"> Works</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 glass-card ${
                    step.color === "cyan" ? "border-cyan-500/20" :
                    step.color === "blue" ? "border-blue-500/20" :
                    step.color === "purple" ? "border-purple-500/20" :
                    step.color === "green" ? "border-green-500/20" :
                    "border-orange-500/20"
                  } border`}
                >
                  <step.icon className={`w-7 h-7 ${
                    step.color === "cyan" ? "text-cyan-400" :
                    step.color === "blue" ? "text-blue-400" :
                    step.color === "purple" ? "text-purple-400" :
                    step.color === "green" ? "text-green-400" :
                    "text-orange-400"
                  }`} />
                </motion.div>

                <div className="text-center">
                  <h3 className="text-sm font-medium text-white">{step.title}</h3>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-8 -right-3 items-center">
                  <div className="w-6 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6 max-w-lg mx-auto"
        >
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { label: "Response", value: "< 5s" },
              { label: "Accuracy", value: "95%" },
              { label: "Coverage", value: "100+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-lg font-semibold gradient-text mb-1">{stat.value}</div>
                <div className="text-white/30 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
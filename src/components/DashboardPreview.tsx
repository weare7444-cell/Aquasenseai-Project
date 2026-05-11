"use client";

import { motion } from "framer-motion";
import { Activity, Droplets, AlertCircle, MapPin, Cpu } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="glow-spot glow-blue bottom-0 right-0" style={{ opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">Dashboard</span>
            <span className="gradient-text"> Preview</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-5 neon-glow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/30 text-xs">AquaSense AI Dashboard</span>
              <div className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400/70 text-[10px] flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/70 animate-pulse" />
                LIVE
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3 space-y-4">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Water Level", value: "2.4m", icon: Droplets, color: "cyan" },
                  { label: "Avg Flow", value: "12.5 m³/s", icon: Activity, color: "blue" },
                  { label: "Humidity", value: "78%", icon: Activity, color: "green" },
                  { label: "Risk Score", value: "LOW", icon: AlertCircle, color: "green" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/30 text-[10px]">{stat.label}</span>
                      <stat.icon className={`w-3 h-3 text-${stat.color}-400/60`} />
                    </div>
                    <div className="text-base font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs">Water Level Monitoring (24h)</span>
                </div>
                <div className="h-24 flex items-end gap-0.5">
                  {[30, 45, 55, 40, 60, 75, 65, 55, 45, 50, 55, 40, 45, 50, 60, 55, 50, 55, 45, 50, 55, 45, 40, 45].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      className="flex-1 bg-gradient-to-t from-cyan-600/80 to-cyan-400/40 rounded-t"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400/60" />
                    <span className="text-white/40 text-xs">Sensor Map - Batam</span>
                  </div>
                  <div className="relative h-20 bg-slate-800/30 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-3">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className="border border-white/5" />
                      ))}
                    </div>
                    {[
                      { x: 1, y: 0, status: "active" },
                      { x: 3, y: 0, status: "active" },
                      { x: 5, y: 1, status: "warning" },
                      { x: 2, y: 2, status: "active" },
                      { x: 4, y: 2, status: "active" },
                    ].map((sensor, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`absolute w-2 h-2 rounded-full ${
                          sensor.status === "active" ? "bg-green-400/80" : "bg-yellow-400/80"
                        }`}
                        style={{ left: `${sensor.x * 16.6}%`, top: `${sensor.y * 33.3}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-3.5 h-3.5 text-blue-400/60" />
                    <span className="text-white/40 text-xs">AI Prediction</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Flood Prob", value: "12%", status: "low" },
                      { label: "Risk Level", value: "LOW", status: "safe" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">{item.label}</span>
                        <span className={`text-xs font-medium ${
                          item.status === "safe" ? "text-green-400" : "text-green-400/70"
                        }`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <h4 className="text-white/60 text-xs font-medium mb-3">Recent Alerts</h4>
                <div className="space-y-2">
                  {[
                    { time: "2 min", msg: "Water level ↑" },
                    { time: "15 min", msg: "Sensor #12 online" },
                    { time: "1 hour", msg: "Rain intensity ↑" },
                  ].map((alert, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1 ${
                        i === 0 ? "bg-yellow-400/60" : "bg-green-400/60"
                      }`} />
                      <div>
                        <p className="text-white/70 text-xs">{alert.msg}</p>
                        <p className="text-white/30 text-[10px]">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <h4 className="text-white/60 text-xs font-medium mb-3">System Health</h4>
                <div className="space-y-2">
                  {[
                    { label: "API", status: "99.9%" },
                    { label: "Database", status: "99.5%" },
                    { label: "AI Engine", status: "98.7%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-white/40 text-xs">{item.label}</span>
                      <span className="text-green-400/70 text-xs font-mono">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
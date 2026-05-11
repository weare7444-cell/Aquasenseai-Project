"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, GitBranch, Link, Wifi, Camera, ArrowRight } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-2 tracking-tight">
            <span className="text-white">Get</span>
            <span className="gradient-text"> In Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6 h-full">
              <h3 className="text-base font-semibold text-white mb-5">Contact Information</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:rayhan2006@gmail.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/25 transition-colors">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Email</p>
                    <p className="text-white text-sm group-hover:text-cyan-400 transition-colors">rayhan2006@gmail.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="tel:0899999999"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Phone</p>
                    <p className="text-white text-sm group-hover:text-blue-400 transition-colors">0899999999</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/25 transition-colors">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Location</p>
                    <p className="text-white text-sm group-hover:text-purple-400 transition-colors">Batam, Kep. Riau, Indonesia</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-white/30 text-xs mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {[
                    { icon: GitBranch, label: "GitHub", color: "hover:text-cyan-400" },
                    { icon: Link, label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Wifi, label: "Twitter", color: "hover:text-cyan-400" },
                    { icon: Camera, label: "Instagram", color: "hover:text-pink-400" },
                  ].map((social) => (
                    <motion.button
                      key={social.label}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 ${social.color} transition-colors cursor-pointer`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-5">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-800/40 border border-white/5 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500/50 focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="Name"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <input
                      type="email"
                      required
                      className="w-full bg-slate-800/40 border border-white/5 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500/50 focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="Email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                >
                  <input
                    type="text"
                    className="w-full bg-slate-800/40 border border-white/5 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500/50 focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Subject"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                >
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-slate-800/40 border border-white/5 rounded-lg px-3 py-2.5 text-white text-sm focus:border-cyan-500/50 focus:outline-none transition-colors resize-none placeholder:text-white/20"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(14, 165, 233, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Send Message
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
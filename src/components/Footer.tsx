"use client";

import { motion } from "framer-motion";
import { Droplets, ArrowUpRight } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Dashboard", href: "#dashboard" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 mb-3 group cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-semibold">
                <span className="text-white">Aqua</span>
                <span className="text-cyan-400">Sense</span>
                <span className="text-white/80">AI</span>
              </span>
            </motion.a>
            <p className="text-white/30 text-xs leading-relaxed">
              Platform smart water monitoring berbasis IoT dan AI untuk pencegahan banjir di Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/30 hover:text-cyan-400 text-xs transition-colors flex items-center gap-1 group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/30 hover:text-cyan-400 text-xs transition-colors flex items-center gap-1 group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-xs font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-white/30 hover:text-cyan-400 text-xs transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">
            © 2024 AquaSense AI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Made in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
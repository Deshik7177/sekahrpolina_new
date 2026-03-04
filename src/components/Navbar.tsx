"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  // Track selected nav item based on hash
  const navItems = ["Home", "Curriculum", "Features", "Pricing", "FAQ"];
  const [selected, setSelected] = useState<string>("");
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 30));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const updateSelected = () => {
      const hash = window.location.hash.replace("#", "");
      const found = navItems.find(item => item.toLowerCase() === hash);
      setSelected(found || "");
    };
    window.addEventListener("hashchange", updateSelected);
    updateSelected();
    return () => window.removeEventListener("hashchange", updateSelected);
  }, []);

  return (
    <motion.nav
      style={{ opacity: scrolled ? 1 : undefined }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <motion.div
        style={{ opacity: navOpacity }}
        className="absolute inset-0 glass"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg border-beam p-[2px]">
            <div className="w-full h-full rounded-[6px] bg-[#020205] flex items-center justify-center">
              <span className="text-[#077eff] font-bold text-xs">U</span>
            </div>
          </div>
          <span className="font-bold text-white tracking-wide text-sm">
            UPGRIDO
          </span>
        </motion.div>

        {/* Nav Links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => {
            // For Home, hash is empty string
            const hash = item === "Home" ? "" : item.toLowerCase();
            const isSelected = (item === "Home" && selected === "") || selected === item;
            return (
              <li key={item} className="relative">
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-b from-[#077eff] to-transparent rounded-full shadow-lg"
                  />
                )}
                <a
                  href={item === "Home" ? "#" : `#${hash}`}
                  className={`text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#077eff] ${isSelected ? 'text-[#077eff] font-bold' : ''}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton
            className="px-5 py-2 rounded-full text-sm font-semibold text-white border border-[#077eff]/50 bg-[#077eff]/10 hover:bg-[#077eff] hover:border-[#077eff] transition-all duration-300 pulse-glow"
          >
            JOIN NOW
          </MagneticButton>
        </motion.div>
      </div>
    </motion.nav>
  );
}
  
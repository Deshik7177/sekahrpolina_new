"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function BRollFinale() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const bgY = useSpring(rawBgY, { stiffness: 60, damping: 20 });

  const rawTextY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textY = useSpring(rawTextY, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video simulation (parallax) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 z-0 pointer-events-none"
      >
        {/* Cinematic background gradient layers */}
        <div className="absolute inset-0 bg-[#020205]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(7,126,255,0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(0,207,255,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(7,126,255,0.08)_0%,transparent_70%)]" />

        {/* Simulated film grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Horizontal light streaks */}
        {[15, 45, 70, 85].map((top) => (
          <motion.div
            key={top}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/20 to-transparent"
            style={{ top: `${top}%` }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 3 + top * 0.05,
              repeat: Infinity,
              delay: top * 0.03,
            }}
          />
        ))}
      </motion.div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 z-10 bg-[#020205]/70" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[8rem] leading-none text-[#077eff]/20 font-serif mb-4 -mt-8"
        >
          "
        </motion.div>

        {/* Inspirational Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
        >
          The difference between a{" "}
          <span className="gradient-text">good editor</span> and a{" "}
          <span className="gradient-text">great creator</span>
          <br />
          is the story you choose to tell.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-[#077eff] font-semibold text-lg tracking-wide mb-16"
        >
          — Sekhar Polina
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-[1px] bg-[#077eff]/50 mx-auto mb-12"
        />

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          90 days from now, you could be the creator everyone looks up to.
          <br />
          The only question is — are you ready to start?
        </motion.p>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton className="group relative px-14 py-6 rounded-full text-xl font-black text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#077eff] rounded-full pulse-glow" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#077eff] via-[#00cfff] to-[#077eff] bg-[length:200%] group-hover:bg-right-center rounded-full transition-all duration-700" />
            <span className="relative z-10 flex items-center gap-3">
              JOIN NOW
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </MagneticButton>

          <p className="text-white/30 text-sm">
            Only{" "}
            <span className="text-[#077eff] font-semibold">47 seats</span>{" "}
            remaining
          </p>
        </motion.div>

        {/* Final stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: "90", label: "Days to Transform" },
            { value: "4", label: "Power Modules" },
            { value: "∞", label: "Lifetime Access" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black gradient-text-blue">{s.value}</p>
              <p className="text-white/30 text-xs mt-1 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

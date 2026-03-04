"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CLIPS = [
  { id: 1, label: "Cinematic B-Roll", color: "#077eff", aspect: "16/9" },
  { id: 2, label: "Transition Pack", color: "#0a5cc7", aspect: "9/16" },
  { id: 3, label: "Color Grading", color: "#0e3a7a", aspect: "16/9" },
  { id: 4, label: "Motion Graphics", color: "#077eff", aspect: "4/3" },
  { id: 5, label: "Sound Design", color: "#083a8a", aspect: "16/9" },
  { id: 6, label: "Advanced Cuts", color: "#077eff", aspect: "1/1" },
  { id: 7, label: "Export Mastery", color: "#0a5cc7", aspect: "16/9" },
  { id: 8, label: "Storytelling Edit", color: "#0e3a7a", aspect: "4/3" },
];

/* Duplicate for seamless loop */
const ALL_CLIPS = [...CLIPS, ...CLIPS];

function VideoCard({ label, color, index }: { label: string; color: string; index: number }) {
  return (
    <motion.div
      whileHover={{
        rotateY: 5,
        rotateX: -5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="flex-shrink-0 w-48 md:w-64 mx-3 rounded-2xl overflow-hidden cursor-pointer"
      style={{
        border: `1px solid ${color}60`,
        boxShadow: `0 0 20px ${color}20`,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="aspect-video relative flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}30 0%, #020205 70%, ${color}10 100%)`,
        }}
      >
        {/* Thumbnail simulation */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${30 + index * 10}% ${40 + index * 7}%, ${color} 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>
      <div className="px-3 py-2 bg-[#020205]/80 backdrop-blur-sm">
        <p className="text-white/70 text-xs font-medium truncate">{label}</p>
        <p className="text-[#077eff]/60 text-[10px] mt-0.5">Upgrido Tutorial</p>
      </div>
    </motion.div>
  );
}

export default function AuthoritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="authority" className="relative py-32 overflow-hidden">
      {/* Bg gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(7,126,255,0.05)_0%,transparent_60%)]" />
      </div>

      <motion.div style={{ y }} className="relative z-10">
        {/* Heading */}
        <div className="text-center px-6 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#077eff] text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            The Creator Behind It
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            7 Years of Content Creation.
            <br />
            <span className="gradient-text-blue">3 Years of Editing Experience.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/50 text-lg md:text-xl max-w-xl mx-auto"
          >
            Now shaped into a{" "}
            <span className="text-[#077eff] font-semibold">90-day cohort</span>.
          </motion.p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden perspective-1000 py-4">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020205] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020205] to-transparent z-10" />

          {/* Row 1 — forward */}
          <div className="overflow-hidden mb-4">
            <div className="marquee-track">
              {ALL_CLIPS.map((clip, i) => (
                <VideoCard key={`a-${clip.id}-${i}`} label={clip.label} color={clip.color} index={i} />
              ))}
            </div>
          </div>

          {/* Row 2 — reverse */}
          <div className="overflow-hidden">
            <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
              {[...ALL_CLIPS].reverse().map((clip, i) => (
                <VideoCard key={`b-${clip.id}-${i}`} label={clip.label} color={clip.color} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-16 px-6"
        >
          {[
            { label: "Videos Edited", value: "500+" },
            { label: "Brand Deals", value: "50+" },
            { label: "Platform Growth", value: "1M+" },
            { label: "Cohort Duration", value: "90 Days" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-8 py-5 flex flex-col items-center min-w-[130px]"
              style={{ border: "1px solid rgba(7,126,255,0.15)" }}
            >
              <span className="text-3xl font-black gradient-text-blue">{s.value}</span>
              <span className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

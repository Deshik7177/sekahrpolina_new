"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import MagneticButton from "./MagneticButton";



import { useState, useEffect } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

function useClientParticles(count = 40) {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const arr: Particle[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      }));
      setParticles(arr);
    }
  }, [count]);
  return particles;
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const parallaxY = useSpring(rawY, { stiffness: 100, damping: 30 });

  /* 3D video tilt: starts tilted, levels on scroll */
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const rotateX = useSpring(rawRotateX, { stiffness: 80, damping: 25 });
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 25 });

  /* Parallax for tag/title */
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const PARTICLES = useClientParticles(40);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Mesh gradient corners */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_top_left,rgba(7,126,255,0.18)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(7,126,255,0.12)_0%,transparent_65%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse,rgba(7,126,255,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {mounted &&
          PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-[#077eff]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: titleY }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
      >
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 text-[#077eff] text-sm font-medium tracking-[0.3em] uppercase mb-6 border border-[#077eff]/30 rounded-full px-4 py-1.5 bg-[#077eff]/5 backdrop-blur-sm"
        >
          <img src="/profile_pic.png" alt="Sekhar Polina" className="w-8 h-8 rounded-full object-cover border border-[#077eff]/40" />
          Sekhar Polina brings you
        </motion.p>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="perspective-1000 mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-none tracking-tight">
            <motion.span
              className="block gradient-text"
              animate={{
                rotateX: [0, 2, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Upgrido
            </motion.span>
            <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Ultimate Editing Cohort
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-white/90 text-xl max-w-xl mb-10 leading-relaxed"
        >
          Learning in a space that feels like a friend guiding them.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <MagneticButton className="group relative px-12 py-5 rounded-full text-lg font-bold text-white overflow-hidden transition-all duration-300">
            <span className="absolute inset-0 rounded-full border-2 border-[#077eff] pulse-glow" />
            <span className="absolute inset-[2px] rounded-full bg-[#077eff]/20 group-hover:bg-[#077eff] transition-all duration-500 backdrop-blur-sm" />
            <span className="relative z-10 flex items-center gap-2">
              JOIN NOW
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="mt-14 flex items-center gap-8 md:gap-16 text-center"
        >
          {[
            { value: "90", label: "Days", unit: "-Day Cohort" },
            { value: "7+", label: "Years Experience", unit: "" },
            { value: "10K+", label: "Students Taught", unit: "" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + i * 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-black gradient-text-blue">
                {stat.value}
              </span>
              <span className="text-white/40 text-xs mt-1 tracking-wide">
                {stat.value === "90" ? "Day Cohort" : stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>



      {/* Expanded Video Carousel - Only Videos */}
      <motion.div
        style={{ y: parallaxY }}
        className="w-full flex justify-center items-center mt-8"
      >
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: -540 }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 18, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {[
            "video 1.mp4",
            "video 2 extra.mp4",
            "video 3.mp4",
            "video 4.mp4",
            "Video 5_1(1).mp4",
            "video 6_1.mp4",
            "video 7_1.mp4",
            "video 8.mp4",
          ].map((src, i) => (
            <video
              key={src}
              src={`/${src}`}
              width={260}
              height={160}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover rounded-xl shadow-lg"
              style={{ minWidth: 260, minHeight: 160 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#077eff]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

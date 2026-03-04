"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "./MagneticButton";

const FEATURES = [
  {
    icon: "🎥",
    title: "Professional Camera Work",
    desc: "Learn framing, composition and shooting techniques used by top creators.",
    color: "#077eff",
    delay: 0,
  },
  {
    icon: "🎞️",
    title: "Timeline Mastery",
    desc: "Advanced multi-cam editing, proxies, and speed workflows that save hours.",
    color: "#00cfff",
    delay: 0.1,
  },
  {
    icon: "💸",
    title: "Monetisation Roadmap",
    desc: "Proven systems to earn from brand deals, freelancing, and digital products.",
    color: "#0a9e60",
    delay: 0.2,
  },
  {
    icon: "🌐",
    title: "Community Access",
    desc: "Private Discord with Sekhar + cohort peers for feedback and collaboration.",
    color: "#a855f7",
    delay: 0.3,
  },
  {
    icon: "🔁",
    title: "Live Sessions",
    desc: "Weekly live calls with real-time editing reviews and Q&A with Sekhar.",
    color: "#f59e0b",
    delay: 0.4,
  },
  {
    icon: "📱",
    title: "Platform Optimization",
    desc: "YouTube, Instagram Reels, and Shorts — master each algorithm's needs.",
    color: "#077eff",
    delay: 0.5,
  },
];

function FloatingIcon({
  icon,
  color,
  style,
  className,
}: {
  icon: string;
  color: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center justify-center text-3xl rounded-2xl ${className}`}
      style={{
        width: 64,
        height: 64,
        background: `${color}20`,
        border: `1px solid ${color}40`,
        boxShadow: `0 0 20px ${color}30`,
        backdropFilter: "blur(8px)",
        ...style,
      }}
    >
      {icon}
    </motion.div>
  );
}

/* Neon border beam on price card */
function NeonBeamCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl p-[2px] overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute inset-0 border-beam rounded-3xl" />
      {/* Inner card */}
      <div className="relative rounded-[22px] overflow-hidden glass p-8 md:p-12">
        {children}
      </div>
    </div>
  );
}

export default function FeaturesPrice() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="features" className="relative py-32 px-6 overflow-hidden">
      {/* bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/20 to-transparent" />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vh] bg-[radial-gradient(ellipse_at_right,rgba(7,126,255,0.08)_0%,transparent_70%)]" />
      </div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        {/* ============ WHY THIS COHORT ============ */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#077eff] text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Why This{" "}
              <span className="gradient-text">Cohort</span>
            </motion.h2>
          </div>

          {/* Floating decorative icons */}
          <div className="relative">
            <FloatingIcon icon="🎥" color="#077eff" className="hidden lg:flex" style={{ top: -30, left: "5%" }} />
            <FloatingIcon icon="🎞️" color="#00cfff" className="hidden lg:flex float-delay-1" style={{ top: 40, right: "3%" }} />
            <FloatingIcon icon="💸" color="#0a9e60" className="hidden lg:flex float-delay-2" style={{ bottom: -20, left: "15%" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: f.delay }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glass rounded-2xl p-6 cursor-default"
                  style={{
                    border: `1px solid ${f.color}15`,
                    boxShadow: `0 0 0 0 ${f.color}00`,
                    transition: "box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${f.color}20`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${f.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${f.color}15`;
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl text-2xl flex items-center justify-center mb-4"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ PRICE CARD ============ */}
        <div id="pricing" className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl pointer-events-none z-0" style={{ boxShadow: '0 0 40px 8px #077eff88' }} />
              <NeonBeamCard className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#077eff]/80 to-[#00cfff]/70 shadow-2xl">
              {/* Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-[#077eff]/15 border border-[#077eff]/40 rounded-full px-4 py-1.5 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#077eff] pulse-glow" />
                <span className="text-[#077eff] text-xs font-semibold tracking-wider uppercase">
                  Early Bird — Limited Seats
                </span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 drop-shadow-lg">
                Upgrido Cohort
              </h3>
              <p className="text-white mb-8 text-sm md:text-base font-medium drop-shadow">
                Everything you need to go from zero to professional creator.
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="text-white/50 text-base line-through">₹14,999</span>
                <span className="text-4xl md:text-5xl font-black text-white drop-shadow-xl">
                  ₹4,999
                </span>
                <span className="text-white/60 mb-1 text-xs">one-time</span>
              </div>

              {/* Includes */}
              <ul className="space-y-3 mb-8">
                {[
                  "90-day structured curriculum (4 modules)",
                  "Weekly live sessions with Sekhar Polina",
                  "Private cohort community (Discord)",
                  "Lifetime access to recorded sessions",
                  "Certificate of completion",
                  "Project reviews & personal feedback",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white text-xs md:text-sm font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#077eff]/20 border border-[#077eff]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#077eff]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0px 0px 20px rgba(7, 126, 255, 0.5)' }}
                className="w-full group relative py-3 rounded-xl text-base md:text-lg font-black text-white overflow-hidden focus:outline-none mt-2"
                style={{ background: 'none', border: 'none' }}
              >
                <span className="absolute inset-0 bg-[#077eff] rounded-xl" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#077eff] via-[#00cfff] to-[#077eff] bg-[length:200%] group-hover:bg-right-center rounded-xl transition-all duration-700 pulse-glow" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ENROLL NOW — ₹4,999
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              <p className="text-center text-white/40 text-xs mt-3">
                Secure payment · Instant access · 7-day refund policy
              </p>
              </NeonBeamCard>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

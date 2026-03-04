"use client";
import { useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CURRICULUM = [
  {
    id: "01",
    title: "A to Z Editing",
    subtitle: "From Raw to Cinema",
    color: "#077eff",
    icon: "🎬",
    points: [
      "Premiere Pro & DaVinci Resolve mastery",
      "Advanced timeline techniques",
      "Audio design & mixing",
      "Export for every platform",
      "Speed & slow-motion control",
    ],
    gradient: "from-[#077eff]/20 to-transparent",
  },
  {
    id: "02",
    title: "Storytelling",
    subtitle: "Hook. Build. Explode",
    color: "#00cfff",
    icon: "📖",
    points: [
      "The viral hook formula",
      "Narrative arc construction",
      "Emotional pacing techniques",
      "Script-to-screen workflow",
      "Thumbnail + title psychology",
    ],
    gradient: "from-[#00cfff]/15 to-transparent",
  },
  {
    id: "03",
    title: "Monetise",
    subtitle: "Turn Skills Into Income",
    color: "#0a9e60",
    icon: "💰",
    points: [
      "Brand deal negotiation scripts",
      "Freelance client acquisition",
      "Pricing your services right",
      "Build a passive income stream",
      "Long-term creator economy play",
    ],
    gradient: "from-[#0a9e60]/15 to-transparent",
  },
  {
    id: "04",
    title: "Personal Branding",
    subtitle: "Become Unforgettable",
    color: "#a855f7",
    icon: "🏆",
    points: [
      "Define your visual identity",
      "Consistent content strategy",
      "Building a loyal audience",
      "Collaborations & networking",
      "Going from creator to authority",
    ],
    gradient: "from-[#a855f7]/15 to-transparent",
  },
];

function Card3D({
  item,
  index,
}: {
  item: (typeof CURRICULUM)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateXY, setRotateXY] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -18;
    const ry = (px - 0.5) * 18;
    setRotateXY({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setRotateXY({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative cursor-pointer"
    >
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      animate={{
        rotateX: rotateXY.x,
        rotateY: rotateXY.y,
        scale: hovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative"
    >
      {/* Glow */}
      {hovered && (
        <div
          className="absolute -inset-px rounded-3xl blur-lg opacity-60 z-0 transition-opacity duration-300"
          style={{ background: `${item.color}30` }}
        />
      )}

      {/* Card */}
      <div
        className="relative z-10 rounded-3xl p-8 h-full glass"
        style={{
          border: `1px solid ${hovered ? item.color + "60" : item.color + "20"}`,
          boxShadow: hovered
            ? `0 20px 60px ${item.color}20, inset 0 0 30px ${item.color}05`
            : "none",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Header */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-30 pointer-events-none`}
        />
        <div className="flex items-start justify-between mb-6">
          <div>
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase mb-2 block"
              style={{ color: item.color }}
            >
              Module {item.id}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              {item.title}
            </h3>
            <p className="text-white/40 text-sm mt-1">{item.subtitle}</p>
          </div>
          <motion.span
            className="text-4xl"
            style={{ transform: "translateZ(20px)" }}
            animate={hovered ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            {item.icon}
          </motion.span>
        </div>

        {/* Points */}
        <ul className="space-y-3">
          {item.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.06 }}
              className="flex items-start gap-3 text-white/70 text-sm"
            >
              <span
                className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background: `${item.color}20`,
                  border: `1px solid ${item.color}40`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.color }}
                />
              </span>
              {point}
            </motion.li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="mt-6 pt-4 border-t flex items-center gap-2"
          style={{ borderColor: `${item.color}15` }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
          />
          <span className="text-white/30 text-xs">
            {item.points.length} lessons included
          </span>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
}

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="curriculum" className="relative py-32 px-6 overflow-hidden">
      {/* Bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,126,255,0.04)_0%,transparent_65%)]" />
      </div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#077eff] text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            What You'll Learn
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            The{" "}
            <span className="gradient-text">Curriculum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 mt-3 max-w-lg mx-auto"
          >
            Four pillars that will transform you from a beginner to a
            professional creator in 90 days.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="perspective-1000 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CURRICULUM.map((item, i) => (
            <Card3D key={item.id} item={item} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

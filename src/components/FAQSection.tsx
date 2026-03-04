"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Who is this cohort for?",
    a: "This cohort is for aspiring video editors, content creators, and anyone who wants to build a career or brand through video. Whether you're a complete beginner or an intermediate creator wanting to level up, Upgrido is designed for you.",
  },
  {
    q: "Do I need expensive software or equipment?",
    a: "No. We cover both free and paid tools. You can start with DaVinci Resolve (free), a decent laptop, and a smartphone camera. We'll guide you from day one regardless of your current setup.",
  },
  {
    q: "How much time do I need per week?",
    a: "We recommend 5–8 hours per week. The cohort is designed to be intense but manageable — with pre-recorded lessons + weekly live sessions. You set your own pace within the 90-day structure.",
  },
  {
    q: "Is there a certificate at the end?",
    a: "Yes! Upon completing all modules and submitting your final project, you'll receive an official Upgrido Certificate of Completion signed by Sekhar Polina — a real credential for your portfolio.",
  },
  {
    q: "What if I miss a live session?",
    a: "All live sessions are recorded and uploaded within 24 hours. You'll have lifetime access to the recordings, so missing one won't set you back. You can also submit questions beforehand.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 7-day full refund policy — no questions asked. If you go through the first week and feel it's not for you, you'll get 100% of your money back instantly.",
  },
];

function AccordionItem({ item, index }: { item: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${open ? "rgba(7,126,255,0.35)" : "rgba(255,255,255,0.06)"}`,
        background: open ? "rgba(7,126,255,0.04)" : "rgba(255,255,255,0.015)",
        boxShadow: open ? "0 0 30px rgba(7,126,255,0.1)" : "none",
        backdropFilter: "blur(20px)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      <button
        className="w-full flex items-center gap-4 p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        {/* Number */}
        <span
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black"
          style={{
            background: open ? "rgba(7,126,255,0.2)" : "rgba(7,126,255,0.08)",
            border: `1px solid ${open ? "rgba(7,126,255,0.5)" : "rgba(7,126,255,0.2)"}`,
            color: "#077eff",
            transition: "all 0.3s ease",
            boxShadow: open ? "0 0 12px rgba(7,126,255,0.4)" : "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Question */}
        <span className="flex-1 text-white font-semibold text-base md:text-lg leading-snug">
          {item.q}
        </span>
        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#077eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-white/55 text-sm md:text-base leading-relaxed pl-[72px]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} id="faq" className="relative py-32 px-6 overflow-hidden">
      {/* bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#077eff]/20 to-transparent" />
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vh] bg-[radial-gradient(ellipse_at_left,rgba(7,126,255,0.07)_0%,transparent_70%)]" />
      </div>

      <motion.div style={{ y }} className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#077eff] text-sm font-medium tracking-[0.3em] uppercase mb-4"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} item={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@sekharpolina.com"
            className="text-[#077eff] font-semibold hover:underline underline-offset-4 transition-all"
          >
            Reach out to us directly →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

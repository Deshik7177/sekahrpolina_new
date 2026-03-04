import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";

const VIDEO_LIST = [
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627829/video_3_lr0tru.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627816/video_8_z9qcde.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627815/video_2_extra_untutl.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627813/Video_7_1_fuzxsy.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627811/video_6_1_icphr1.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627803/Video_4_shps5w.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627799/Video_1_w16dab.mp4",
  "https://res.cloudinary.com/du7lbrwzt/video/upload/v1772627799/Video_5_1_1_qp5alc.mp4",
];

const DUPLICATED_LIST = [...VIDEO_LIST, ...VIDEO_LIST];
const CARD_WIDTH = 260 + 32; // 260px video + 2*16px gap
const TOTAL_WIDTH = (260 + 32) * VIDEO_LIST.length * 2;





function VideoInView({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) {
      if (video.paused) video.play().catch(() => {});
    } else {
      if (!video.paused) video.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      width={260}
      height={160}
      loop
      muted
      playsInline
      preload="metadata"
      className="object-cover w-full h-full rounded-xl"
      style={{ display: "block" }}
    />
  );
}

export default function VideoMarquee() {
  return (
    <div
      className="relative w-full flex items-center overflow-hidden py-8"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <motion.div
        className="flex gap-8"
        animate={{ x: [-TOTAL_WIDTH / 2, 0] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        style={{ width: TOTAL_WIDTH }}
      >
        {DUPLICATED_LIST.map((src, i) => (
          <motion.div
            key={src + i}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="border-2 border-white rounded-xl shadow-2xl transition-colors duration-200 hover:border-[#077eff]"
            style={{ width: 260, height: 160, overflow: "hidden" }}
          >
            <VideoInView src={src} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

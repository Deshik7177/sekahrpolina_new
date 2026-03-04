import { motion } from "framer-motion";

const VIDEO_LIST = [
  "video 1.mp4",
  "video 2 extra.mp4",
  "video 3.mp4",
  "video 4.mp4",
  "Video 5_1(1).mp4",
  "video 6_1.mp4",
  "video 7_1.mp4",
  "video 8.mp4",
];

const DUPLICATED_LIST = [...VIDEO_LIST, ...VIDEO_LIST];
const CARD_WIDTH = 260 + 32; // 260px video + 2*16px gap
const TOTAL_WIDTH = CARD_WIDTH * VIDEO_LIST.length * 2;

const marqueeVariants = {
  animate: {
    x: [-TOTAL_WIDTH / 2, 0],
    transition: {
      ease: [0, 0, 1, 1], // Use cubic-bezier for linear easing to satisfy TypeScript
      duration: 25,
      repeat: Infinity,
    },
  },
};

export default function VideoMarquee() {
  return (
    <div
      className="relative w-full flex items-center overflow-hidden py-8"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-8"
        variants={marqueeVariants}
        animate="animate"
        style={{ width: TOTAL_WIDTH }}
      >
        {DUPLICATED_LIST.map((src, i) => (
          <motion.div
            key={src + i}
            whileHover={{ scale: 1.05 }}
            className="border-2 border-white rounded-xl shadow-2xl transition-colors duration-200 hover:border-[#077eff]"
            style={{ width: 260, height: 160, overflow: "hidden" }}
          >
            <video
              src={`/${src}`}
              width={260}
              height={160}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full rounded-xl"
              style={{ display: "block" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

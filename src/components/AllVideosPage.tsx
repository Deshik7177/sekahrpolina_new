import React from "react";

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

export default function AllVideosPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">All Videos</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
        {VIDEO_LIST.map((src, i) => (
          <div
            key={src}
            className="bg-gradient-to-br from-[#0a1833] to-[#1a233a] border border-white/20 rounded-xl shadow-xl flex flex-col items-center p-2 sm:p-4"
          >
            <video
              src={`/${src}`}
              controls
              className="object-cover w-full h-40 sm:h-48 rounded-xl mb-2 sm:mb-4"
              style={{ background: "#111" }}
            />
            <span className="text-white text-sm sm:text-base font-semibold text-center break-words">{src.replace(/\.mp4$/, "").replace(/_/g, " ")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

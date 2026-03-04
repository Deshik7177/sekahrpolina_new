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
    <div className="min-h-screen bg-black flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold text-white mb-10">All Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl px-4">
        {VIDEO_LIST.map((src, i) => (
          <div
            key={src}
            className="bg-gradient-to-br from-[#0a1833] to-[#1a233a] border-2 border-white rounded-xl shadow-2xl flex flex-col items-center p-4"
          >
            <video
              src={`/${src}`}
              width={320}
              height={180}
              controls
              className="object-cover w-full h-48 rounded-xl mb-4"
              style={{ background: "#111" }}
            />
            <span className="text-white text-lg font-semibold">{src.replace(/\.mp4$/, "").replace(/_/g, " ")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

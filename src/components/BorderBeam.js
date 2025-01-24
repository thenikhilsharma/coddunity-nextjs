import React from "react"

export function BorderBeam({ size = 250, duration = 12, delay = 9 }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-lg"
      style={{
        maskImage: `radial-gradient(circle at center, transparent ${size}px, black ${size + 1}px)`,
        WebkitMaskImage: `radial-gradient(circle at center, transparent ${size}px, black ${size + 1}px)`,
      }}
    >
      <div
        className="absolute inset-0 translate-y-full animate-beam"
        style={{
          background: "linear-gradient(0deg, transparent, #fff 50%, transparent)", // Adjust the gradient
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  );
}



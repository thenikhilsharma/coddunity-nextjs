"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ContainerScroll = ({ imageSrc }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Framer Motion transformations
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[75rem] flex items-center justify-center relative p-2 md:p-0"
      ref={containerRef}
    >
      <div
        className="py-0 md:py-0 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            translateY: translate,
          }}
          className="max-w-6xl mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] bg-[#222222] rounded-[30px] shadow-2xl overflow-hidden"
        >
          <img
            src={imageSrc}
            alt="Scroll Animation"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContainerScroll;

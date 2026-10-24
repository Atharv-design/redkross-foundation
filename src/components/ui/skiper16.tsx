"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: "/images/lummi/img8.png",
  },
  {
    title: "Project 2",
    src: "/images/lummi/img14.png",
  },
  {
    title: "Project 3",
    src: "/images/lummi/img10.png",
  },
  {
    title: "Project 4",
    src: "/images/lummi/img15.png",
  },
  {
    title: "Project 5",
    src: "/images/lummi/img12.png",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
  children,
  className,
}: {
  i: number;
  title?: string;
  src?: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  children?: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-20 sm:top-24 flex items-center justify-center w-full mb-8 sm:mb-12 last:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(6vh + ${i * 20}px)`,
        }}
        className={className || "relative flex origin-top flex-col overflow-hidden w-full max-w-4xl"}
      >
        {children ? (
          children
        ) : src ? (
          <img src={src} alt={title || ""} className="h-full w-full object-cover rounded-3xl" />
        ) : null}
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh]"
    >
      <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          scroll down to see card stack
        </span>
      </div>
      {projects.map((project, i) => {
        const targetScale = Math.max(
          0.5,
          1 - (projects.length - i - 1) * 0.1,
        );
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export { Skiper16, StickyCard_001 };
export default Skiper16;

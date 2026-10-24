import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedHeading({ text, className = "", delay = 0, tag = "h2" }) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const Tag = tag;

  return (
    <Tag 
      ref={headingRef} 
      className={`flex flex-wrap justify-center items-center text-center gap-x-2.5 mx-auto ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`inline-block ${isVisible ? "word-reveal" : "opacity-0"}`}
          style={{
            animationDelay: isVisible ? `${delay + idx * 0.08}s` : "0s"
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

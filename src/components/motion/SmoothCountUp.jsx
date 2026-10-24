import React, { useState, useEffect, useRef } from 'react';

/**
 * SmoothCountUp
 * Inspired by Skiper-UI (skiper37 - Animated number)
 * High-precision rAF counter with cubic-out easing curve and reduced-motion support.
 */
export default function SmoothCountUp({
  end,
  duration = 1800,
  prefix = '',
  suffix = '',
  formatter = (val) => val.toLocaleString(),
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic-out easing: fast start, ultra-smooth landing
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * end);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formatter(count)}
      {suffix}
    </span>
  );
}

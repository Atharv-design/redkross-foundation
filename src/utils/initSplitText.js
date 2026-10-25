import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Robust HTML-preserving SplitText Engine for RedKross Official Website.
 * Perfectly preserves all inline elements (<span className="gradient-text">, <br>, etc.)
 * Ensures that characters inside gradient text retain background-clip and fill-color,
 * preventing any sentences from being truncated, stripped, or rendered invisible.
 */
export function initGlobalSplitText() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

  // Find all main section headings and tagged elements across the entire website
  const targets = Array.from(
    document.querySelectorAll('section h1, section h2, .split-heading, .split-text')
  );

  function splitNode(node, isGradientClass = '') {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!text || text.length === 0) return null;
      if (/^\s+$/.test(text)) {
        return document.createTextNode(text);
      }

      const frag = document.createDocumentFragment();
      // Split words while preserving space sequences
      const parts = text.split(/(\s+)/);

      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }

        const wordSpan = document.createElement('span');
        wordSpan.className = 'split-word inline-block';
        if (isGradientClass) {
          wordSpan.classList.add(isGradientClass);
        }

        for (const char of part) {
          const charSpan = document.createElement('span');
          charSpan.className = 'split-char inline-block';
          charSpan.textContent = char;
          if (isGradientClass) {
            charSpan.classList.add(isGradientClass);
          }
          wordSpan.appendChild(charSpan);
        }
        frag.appendChild(wordSpan);
      });
      return frag;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Keep <br> tags intact
      if (node.tagName.toLowerCase() === 'br') {
        return node.cloneNode(true);
      }

      // Check for gradient classes
      let gradClass = isGradientClass;
      if (node.classList.contains('gradient-text')) gradClass = 'gradient-text';
      else if (node.classList.contains('gradient-text-teal')) gradClass = 'gradient-text-teal';
      else if (node.classList.contains('gradient-text-mixed')) gradClass = 'gradient-text-mixed';

      const clone = node.cloneNode(false);
      Array.from(node.childNodes).forEach((child) => {
        const processed = splitNode(child, gradClass);
        if (processed) clone.appendChild(processed);
      });
      return clone;
    }
    return node.cloneNode(true);
  }

  targets.forEach((element) => {
    try {
      // Avoid double-splitting or breaking already-processed headings
      if (element.dataset.splitInitialized === 'true') return;
      element.dataset.splitInitialized = 'true';

      element.style.perspective = '1000px';

      // Save cloned original child nodes safely without innerHTML string sinks
      element._originalChildNodes = Array.from(element.childNodes).map((node) => node.cloneNode(true));

      const fragment = document.createDocumentFragment();
      Array.from(element.childNodes).forEach((child) => {
        const res = splitNode(child);
        if (res) fragment.appendChild(res);
      });

      // Atomic, safe DOM replacement preventing DOM XSS sinks
      element.replaceChildren(fragment);

      const chars = element.querySelectorAll('.split-char');
      if (chars.length === 0) return;

      // Check if this heading is in the Hero above-the-fold
      const isHero = element.closest('#hero') !== null;

      if (isHero) {
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 35,
            rotateX: -65,
            transformOrigin: '0% 50% -50px',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.015,
            duration: 0.85,
            ease: 'power3.out',
            delay: 0.25,
          }
        );
      } else {
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 35,
            rotateX: -65,
            transformOrigin: '0% 50% -50px',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.015,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    } catch (err) {
      console.warn('Safe SplitText caught error on heading:', err);
    }
  });

  // Return cleanup function
  return () => {
    targets.forEach((el) => {
      if (el._originalChildNodes) {
        el.replaceChildren(...el._originalChildNodes);
        delete el._originalChildNodes;
        delete el.dataset.splitInitialized;
      }
    });
  };
}

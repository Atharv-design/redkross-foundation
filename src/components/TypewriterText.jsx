import React, { useState, useEffect } from 'react';

/**
 * TypewriterText - Realistic character-by-character typing with blinking cursor,
 * pause on complete, deleting animation, and cycling through changing sentences/tones.
 * Guaranteed single line with whitespace-nowrap.
 */
export default function TypewriterText({ 
  phrases = [], 
  typingSpeed = 38, 
  deletingSpeed = 18, 
  pauseTime = 2400,
  className = "" 
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];

    let timer;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center whitespace-nowrap ${className}`}>
      <span className="whitespace-nowrap">{displayText}</span>
      <span className="w-0.5 h-4 sm:h-5 ml-1 bg-[#E57A00] animate-pulse inline-block flex-shrink-0"></span>
    </span>
  );
}

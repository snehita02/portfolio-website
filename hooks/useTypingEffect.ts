"use client";

import { useEffect, useState, useCallback } from "react";

export function useTypingEffect(
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2000
): { displayText: string; isTyping: boolean } {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const tick = useCallback(() => {
    const currentText = texts[currentIndex] ?? "";

    if (isPaused) return;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        setIsTyping(true);
      } else {
        setIsPaused(true);
        setIsTyping(false);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseMs);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, displayText.length - 1));
        setIsTyping(true);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, currentIndex, isDeleting, isPaused, texts, pauseMs]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return { displayText, isTyping };
}

"use client";

import { motion } from "framer-motion";
import { blinkCursor } from "@/lib/animations";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
  cursorClassName?: string;
  prefix?: string;
}

export function AnimatedText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2000,
  className,
  cursorClassName,
  prefix,
}: AnimatedTextProps) {
  const { displayText } = useTypingEffect(texts, typingSpeed, deletingSpeed, pauseMs);

  return (
    <span className={cn("inline-flex items-baseline gap-0", className)}>
      {prefix && (
        <span className="mr-1.5 text-muted-foreground">{prefix}</span>
      )}
      <span className="text-indigo-400">{displayText}</span>
      <motion.span
        className={cn(
          "ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[1px] rounded-sm bg-indigo-400",
          cursorClassName
        )}
        {...blinkCursor}
      />
    </span>
  );
}

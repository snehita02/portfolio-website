"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay, duration: 1.2, ease: "easeInOut" },
      opacity: { delay, duration: 0.2 },
    },
  }),
};

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { delay, duration: 0.4 },
  }),
};

interface DeveloperIllustrationProps {
  className?: string;
}

export function DeveloperIllustration({ className }: DeveloperIllustrationProps) {
  return (
    <motion.svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-full max-w-[460px] stroke-neutral-800 dark:stroke-neutral-200",
        className
      )}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate="visible"
      aria-label="Female software engineer working at a computer"
      role="img"
    >
      {/* ── Desk Surface ─────────────────────────────────────── */}
      <motion.line
        x1="60" y1="290" x2="420" y2="290"
        strokeWidth="2.5"
        variants={pathVariant}
        custom={0}
      />
      {/* Desk legs */}
      <motion.line x1="80" y1="290" x2="80" y2="340" strokeWidth="2" variants={pathVariant} custom={0.05} />
      <motion.line x1="400" y1="290" x2="400" y2="340" strokeWidth="2" variants={pathVariant} custom={0.05} />
      <motion.line x1="68" y1="340" x2="412" y2="340" strokeWidth="2" variants={pathVariant} custom={0.1} />

      {/* ── Monitor Stand ────────────────────────────────────── */}
      <motion.line x1="240" y1="175" x2="240" y2="290" strokeWidth="2" variants={pathVariant} custom={0.15} />
      <motion.line x1="210" y1="290" x2="270" y2="290" strokeWidth="2" variants={pathVariant} custom={0.2} />

      {/* ── Monitor Frame ────────────────────────────────────── */}
      <motion.rect
        x="120" y="80" width="240" height="155" rx="6"
        strokeWidth="2.5"
        variants={pathVariant}
        custom={0.1}
      />

      {/* Monitor bezel inner */}
      <motion.rect
        x="130" y="90" width="220" height="135" rx="3"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        variants={pathVariant}
        custom={0.25}
      />

      {/* ── Screen Content: Code lines ───────────────────────── */}
      {/* Line 1 – keyword */}
      <motion.line x1="148" y1="110" x2="185" y2="110" strokeWidth="2" strokeOpacity="0.9" variants={pathVariant} custom={0.4} />
      {/* Line 1 – text */}
      <motion.line x1="190" y1="110" x2="248" y2="110" strokeWidth="2" strokeOpacity="0.5" variants={pathVariant} custom={0.45} />

      {/* Line 2 – indented */}
      <motion.line x1="158" y1="124" x2="195" y2="124" strokeWidth="2" strokeOpacity="0.7" variants={pathVariant} custom={0.5} />
      <motion.line x1="200" y1="124" x2="265" y2="124" strokeWidth="2" strokeOpacity="0.45" variants={pathVariant} custom={0.55} />
      <motion.line x1="270" y1="124" x2="310" y2="124" strokeWidth="2" strokeOpacity="0.3" variants={pathVariant} custom={0.6} />

      {/* Line 3 */}
      <motion.line x1="158" y1="138" x2="230" y2="138" strokeWidth="2" strokeOpacity="0.6" variants={pathVariant} custom={0.6} />

      {/* Line 4 – longer */}
      <motion.line x1="158" y1="152" x2="200" y2="152" strokeWidth="2" strokeOpacity="0.8" variants={pathVariant} custom={0.65} />
      <motion.line x1="205" y1="152" x2="290" y2="152" strokeWidth="2" strokeOpacity="0.4" variants={pathVariant} custom={0.7} />

      {/* Line 5 */}
      <motion.line x1="148" y1="166" x2="178" y2="166" strokeWidth="2" strokeOpacity="0.9" variants={pathVariant} custom={0.72} />

      {/* Cursor blink on last line */}
      <motion.rect
        x="182" y="160" width="2" height="11" rx="1"
        strokeWidth="0"
        className="fill-neutral-800 dark:fill-neutral-200"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        variants={fadeVariant}
        custom={0.8}
      />

      {/* ── Keyboard ─────────────────────────────────────────── */}
      <motion.rect
        x="160" y="296" width="130" height="22" rx="4"
        strokeWidth="1.8"
        variants={pathVariant}
        custom={0.3}
      />
      {/* Key rows */}
      <motion.line x1="168" y1="305" x2="283" y2="305" strokeWidth="1" strokeOpacity="0.4" variants={pathVariant} custom={0.45} />
      <motion.line x1="172" y1="312" x2="278" y2="312" strokeWidth="1" strokeOpacity="0.3" variants={pathVariant} custom={0.5} />

      {/* ── Mouse ───────────────────────────────────────────── */}
      <motion.ellipse cx="306" cy="305" rx="10" ry="14" strokeWidth="1.8" variants={pathVariant} custom={0.5} />
      <motion.line x1="306" y1="295" x2="306" y2="303" strokeWidth="1.2" strokeOpacity="0.5" variants={pathVariant} custom={0.55} />

      {/* ── Coffee Mug ──────────────────────────────────────── */}
      <motion.path d="M370 268 L370 290 Q370 295 375 295 L390 295 Q395 295 395 290 L395 268 Z" strokeWidth="1.8" variants={pathVariant} custom={0.55} />
      {/* Mug handle */}
      <motion.path d="M395 272 Q408 272 408 279 Q408 286 395 286" strokeWidth="1.8" variants={pathVariant} custom={0.6} />
      {/* Steam */}
      <motion.path d="M377 264 Q379 258 377 252" strokeWidth="1.5" strokeOpacity="0.4" variants={pathVariant} custom={0.7} />
      <motion.path d="M384 264 Q386 256 384 248" strokeWidth="1.5" strokeOpacity="0.4" variants={pathVariant} custom={0.75} />
      <motion.path d="M391 264 Q393 258 391 252" strokeWidth="1.5" strokeOpacity="0.4" variants={pathVariant} custom={0.8} />

      {/* ── Small Plant ─────────────────────────────────────── */}
      {/* Pot */}
      <motion.path d="M82 290 L88 268 L104 268 L110 290 Z" strokeWidth="1.8" variants={pathVariant} custom={0.5} />
      {/* Soil line */}
      <motion.line x1="88" y1="273" x2="104" y2="273" strokeWidth="1.2" strokeOpacity="0.4" variants={pathVariant} custom={0.55} />
      {/* Stem */}
      <motion.line x1="96" y1="268" x2="96" y2="245" strokeWidth="1.8" variants={pathVariant} custom={0.6} />
      {/* Leaves */}
      <motion.path d="M96 260 Q84 252 80 240 Q90 242 96 252" strokeWidth="1.5" variants={pathVariant} custom={0.65} />
      <motion.path d="M96 255 Q108 246 114 234 Q104 238 96 248" strokeWidth="1.5" variants={pathVariant} custom={0.7} />
      <motion.path d="M96 250 Q96 238 96 230" strokeWidth="1.5" variants={pathVariant} custom={0.72} />
      <motion.path d="M96 245 Q88 236 86 224" strokeWidth="1.4" strokeOpacity="0.6" variants={pathVariant} custom={0.74} />
      <motion.path d="M96 242 Q104 232 108 220" strokeWidth="1.4" strokeOpacity="0.6" variants={pathVariant} custom={0.76} />

      {/* ── Character: Chair ────────────────────────────────── */}
      {/* Chair seat */}
      <motion.ellipse cx="240" cy="310" rx="40" ry="8" strokeWidth="1.8" strokeOpacity="0.5" variants={pathVariant} custom={0.25} />
      {/* Chair back */}
      <motion.path d="M205 310 L205 265 Q205 258 212 258 L268 258 Q275 258 275 265 L275 310" strokeWidth="1.8" strokeOpacity="0.4" variants={pathVariant} custom={0.3} />

      {/* ── Character: Torso ────────────────────────────────── */}
      {/* Body */}
      <motion.path
        d="M215 265 Q215 240 225 232 L240 228 L255 232 Q265 240 265 265"
        strokeWidth="2"
        variants={pathVariant}
        custom={0.55}
      />

      {/* ── Character: Arms ─────────────────────────────────── */}
      {/* Left arm → keyboard */}
      <motion.path
        d="M218 245 Q200 258 185 292"
        strokeWidth="2"
        variants={pathVariant}
        custom={0.65}
      />
      {/* Right arm → keyboard */}
      <motion.path
        d="M262 245 Q280 258 275 292"
        strokeWidth="2"
        variants={pathVariant}
        custom={0.65}
      />
      {/* Left hand */}
      <motion.ellipse cx="185" cy="294" rx="7" ry="5" strokeWidth="1.5" variants={pathVariant} custom={0.7} />
      {/* Right hand */}
      <motion.ellipse cx="276" cy="294" rx="7" ry="5" strokeWidth="1.5" variants={pathVariant} custom={0.7} />

      {/* ── Character: Neck ─────────────────────────────────── */}
      <motion.line x1="237" y1="228" x2="237" y2="218" strokeWidth="2" variants={pathVariant} custom={0.55} />
      <motion.line x1="243" y1="228" x2="243" y2="218" strokeWidth="2" variants={pathVariant} custom={0.55} />

      {/* ── Character: Head ─────────────────────────────────── */}
      <motion.ellipse cx="240" cy="204" rx="22" ry="20" strokeWidth="2" variants={pathVariant} custom={0.5} />

      {/* Hair – bun with strands */}
      <motion.path d="M222 196 Q218 178 240 174 Q262 170 262 196" strokeWidth="2" variants={pathVariant} custom={0.55} />
      <motion.ellipse cx="240" cy="175" rx="10" ry="8" strokeWidth="1.8" variants={pathVariant} custom={0.6} />
      {/* Hair strand detail */}
      <motion.path d="M230 176 Q238 172 246 176" strokeWidth="1.2" strokeOpacity="0.5" variants={pathVariant} custom={0.65} />

      {/* Face: eyes */}
      <motion.ellipse cx="233" cy="202" rx="2.5" ry="2.5" strokeWidth="1.5" variants={pathVariant} custom={0.7} />
      <motion.ellipse cx="247" cy="202" rx="2.5" ry="2.5" strokeWidth="1.5" variants={pathVariant} custom={0.7} />
      {/* Face: subtle smile */}
      <motion.path d="M234 212 Q240 216 246 212" strokeWidth="1.5" variants={pathVariant} custom={0.72} />
      {/* Eyebrows */}
      <motion.path d="M229 196 Q233 193 237 196" strokeWidth="1.2" variants={pathVariant} custom={0.74} />
      <motion.path d="M243 196 Q247 193 251 196" strokeWidth="1.2" variants={pathVariant} custom={0.74} />

      {/* ── Floating decorative dots ─────────────────────────── */}
      <motion.circle cx="68" cy="120" r="3" strokeWidth="1.5" strokeOpacity="0.25" variants={fadeVariant} custom={0.9} />
      <motion.circle cx="430" cy="180" r="2" strokeWidth="1.5" strokeOpacity="0.2" variants={fadeVariant} custom={0.95} />
      <motion.circle cx="58" cy="220" r="2" strokeWidth="1" strokeOpacity="0.15" variants={fadeVariant} custom={1.0} />
      <motion.circle cx="440" cy="100" r="4" strokeWidth="1.5" strokeOpacity="0.15" variants={fadeVariant} custom={0.9} />

    </motion.svg>
  );
}

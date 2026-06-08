"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personal } from "@/lib/data/personal";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { DeveloperIllustration } from "@/components/illustrations/DeveloperIllustration";
import { scrollToSection } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";

const roles = ["AI Engineer", "Data Engineer", "Software Developer"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 z-0" />

      {/* Radial gradient fade */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">

          {/* ── Left Column ────────────────────────────────────── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 text-xs font-medium text-indigo-400"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              Open to new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="mb-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {personal.name}
            </motion.h1>

            {/* Animated title */}
            <motion.div variants={fadeUp} className="mb-6 text-xl font-medium md:text-2xl">
              <AnimatedText
                texts={roles}
                prefix="I'm an"
                typingSpeed={75}
                deletingSpeed={35}
                pauseMs={2200}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mb-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 mx-auto"
            >
              {personal.tagline}
            </motion.p>

            {/* Short intro */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-md text-sm leading-relaxed text-muted-foreground/80 lg:mx-0 mx-auto"
            >
              Architecting intelligent systems that turn complex data into decisions.
              From agentic AI copilots to production data pipelines — I build things that scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30"
              >
                View Projects
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.button>

              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-accent"
              >
                <Download className="h-3.5 w-3.5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Column: SVG Illustration ─────────────────── */}
          <motion.div
            className="flex w-full max-w-sm flex-shrink-0 items-center justify-center lg:w-auto lg:max-w-[460px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <DeveloperIllustration className="w-full" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

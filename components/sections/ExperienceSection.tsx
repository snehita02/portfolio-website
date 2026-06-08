"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experience } from "@/lib/data/experience";
import { slideInLeft, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  "Full-time": "text-emerald-400 bg-emerald-400/10",
  "Part-time": "text-blue-400 bg-blue-400/10",
  Internship: "text-amber-400 bg-amber-400/10",
  Contract: "text-indigo-400 bg-indigo-400/10",
  Freelance: "text-violet-400 bg-violet-400/10",
};

function TimelineItem({
  entry,
  index,
  isLast,
}: {
  entry: (typeof experience)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mt-1 flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-background"
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="mt-1 w-px flex-1 origin-top bg-border/50"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.08 }}
        className="pb-12 last:pb-0"
      >
        {/* Header */}
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-foreground">{entry.role}</h3>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-medium",
              typeColors[entry.type] ?? "text-muted-foreground bg-muted"
            )}
          >
            {entry.type}
          </span>
        </div>

        {/* Company + Period */}
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm">
          <span className="font-medium text-indigo-400">{entry.company}</span>
          <span className="text-muted-foreground/40">·</span>
          <span className="text-muted-foreground">{entry.period}</span>
          <span className="text-muted-foreground/40">·</span>
          <span className="text-muted-foreground">{entry.location}</span>
        </div>

        {/* Achievements */}
        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="space-y-2"
        >
          {entry.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500/60" />
              {achievement}
            </motion.li>
          ))}
        </motion.ul>

        {/* Tech tags */}
        {entry.tech && entry.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border/50 bg-card px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-card/30">
      <SectionHeading
        label="Career"
        title="Professional Experience"
        subtitle="A track record of building AI systems, data pipelines, and scalable software across research, consulting, and enterprise environments."
      />

      <div className="mx-auto max-w-2xl lg:max-w-none">
        {experience.map((entry, i) => (
          <TimelineItem
            key={entry.company + entry.period}
            entry={entry}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

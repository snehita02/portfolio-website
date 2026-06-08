"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personal } from "@/lib/data/personal";
import { fadeUp, staggerContainer } from "@/lib/animations";

const highlights = [
  { label: "Focus Areas", value: "AI Systems · Data Engineering · Automation" },
  { label: "Currently at", value: "StoicLane Inc." },
  { label: "Location", value: personal.location },
  { label: "Contact", value: personal.email },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <SectionWrapper id="about">
      <SectionHeading label="Who I Am" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        {/* Bio */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-5"
        >
          {personal.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-base leading-8 text-muted-foreground"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Social row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Info
            </h3>
            <dl className="space-y-4">
              {highlights.map(({ label, value }) => (
                <div key={label}>
                  <dt className="mb-0.5 text-xs text-muted-foreground/70">{label}</dt>
                  <dd className="text-sm font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-3 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-indigo-400" />
            {personal.location}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

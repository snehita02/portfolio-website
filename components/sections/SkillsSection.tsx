"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Code2,
  Server,
  Database,
  Zap,
  Cloud,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skills } from "@/lib/data/skills";
import { staggerContainer, fadeUp, scaleUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Server,
  Database,
  Zap,
  Cloud,
};

function SkillGroup({
  category,
  icon,
  items,
  index,
}: {
  category: string;
  icon: string;
  items: { name: string }[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const Icon = iconMap[icon] ?? Brain;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-xl border border-border/60 bg-card p-5"
    >
      {/* Category Header */}
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10">
          <Icon className="h-4 w-4 text-indigo-400" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">{category}</h3>
      </div>

      {/* Skill Chips */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap gap-2"
      >
        {items.map(({ name }) => (
          <motion.span
            key={name}
            variants={scaleUp}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            className="cursor-default rounded-lg border border-border/50 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-indigo-500/30 hover:text-indigo-400"
          >
            {name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function SkillsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Expertise"
        title="Skills & Technologies"
        subtitle="Tools and technologies I use to architect, build, and ship intelligent systems at scale."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup, i) => (
          <SkillGroup
            key={skillGroup.category}
            category={skillGroup.category}
            icon={skillGroup.icon}
            items={skillGroup.items}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

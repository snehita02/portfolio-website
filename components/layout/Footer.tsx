"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/lib/data/personal";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
        {/* Left */}
        <p className="text-sm text-muted-foreground">
          Designed &amp; built by{" "}
          <span className="text-foreground font-medium">Snehita Bharata</span>
          {" "}· {new Date().getFullYear()}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}

          {/* Back to top */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

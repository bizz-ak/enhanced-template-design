import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteNav } from "@/components/SiteNav";
import { AmbientBackdrop } from "@/components/motion/AmbientBackdrop";
import { ScrollProgressBar, ParallaxImage } from "@/components/motion/ScrollFx";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AmbientBackdrop />
      <ScrollProgressBar />
      <SiteNav />
      <main className="min-w-0 flex-1">
        {children}
        <SiteFooter />
      </main>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        rounded=""
        strength={12}
        className="absolute inset-0 size-full"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    {
      title: "Explore",
      links: [
        { to: "/about", label: "About" },
        { to: "/beliefs", label: "What We Believe" },
        { to: "/gallery", label: "Gallery" },
      ],
    },
    {
      title: "Get involved",
      links: [
        { to: "/ministries", label: "Ministries" },
        { to: "/events", label: "Events" },
        { to: "/join", label: "Join TUCASA" },
      ],
    },
    {
      title: "Reach us",
      links: [
        { to: "/contact", label: "Contact" },
        { to: "/about/leadership", label: "Leadership" },
        { to: "/about/history", label: "Our History" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border px-6 py-14 sm:px-12 lg:px-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-extrabold tracking-widest text-gold">TUCASA</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Tanzania University and College Adventist Student Association — Nyerere Campus,
            University of Dar es Salaam.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{c.title}</p>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TUCASA Nyerere Campus, University of Dar es Salaam.
      </p>
    </footer>
  );
}

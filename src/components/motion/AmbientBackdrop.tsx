import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { img } from "@/data/site";

/**
 * AmbientBackdrop — a full-viewport photographic layer behind the whole site.
 * It is NOT a single image: each page carries a playlist and the backdrop
 * cross-fades from one photo to the next as you scroll through the sections,
 * with a slow ken-burns drift and a shifting gold haze so no two moments of
 * the page look the same.
 *
 * Any section can also claim its own backdrop with `data-ambient="<key>"`
 * (key = any name in `img`); the most visible one wins.
 */
const playlists: { match: string; frames: string[] }[] = [
  { match: "/about/history", frames: [img.campusAerial, img.bgScripture, img.leaders, img.fellowship] },
  { match: "/about/leadership", frames: [img.leaders, img.bgCampusNight, img.fellowship] },
  { match: "/about/mission", frames: [img.bgScripture, img.bgSunrise, img.outreach] },
  { match: "/about", frames: [img.fellowship, img.campusAerial, img.worship, img.bgSunrise] },
  { match: "/beliefs", frames: [img.bgStainedGlass, img.bgScripture, img.baptism, img.prayer] },
  { match: "/ministries", frames: [img.choir, img.health, img.media, img.outreach] },
  { match: "/events", frames: [img.bgSunrise, img.crusade, img.worship, img.bgCampusNight] },
  { match: "/gallery", frames: [img.media, img.choir, img.fellowship, img.baptism] },
  { match: "/contact", frames: [img.bgCampusNight, img.campusAerial, img.bgStainedGlass] },
  { match: "/join", frames: [img.baptism, img.fellowship, img.bgSunrise, img.worship] },
];

const home = [img.worship, img.choir, img.bibleStudy, img.outreach, img.bgSunrise, img.bgCampusNight];

function framesFor(pathname: string) {
  return playlists.find((p) => pathname.startsWith(p.match))?.frames ?? home;
}

/* alternating ken-burns moves so each frame enters differently */
const moves = [
  { from: { scale: 1.14, x: "-2%", y: "-1.5%" }, to: { scale: 1.02, x: "1%", y: "1%" } },
  { from: { scale: 1.02, x: "2%", y: "1.5%" }, to: { scale: 1.16, x: "-1%", y: "-1%" } },
  { from: { scale: 1.18, x: "0%", y: "2%" }, to: { scale: 1.04, x: "0%", y: "-2%" } },
  { from: { scale: 1.05, x: "-2.5%", y: "0%" }, to: { scale: 1.15, x: "2.5%", y: "0%" } },
];

export function AmbientBackdrop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();
  const frames = useMemo(() => framesFor(pathname), [pathname]);

  const [index, setIndex] = useState(0);
  const [override, setOverride] = useState<string | null>(null);
  const [hue, setHue] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    setIndex(0);
    setOverride(null);
  }, [pathname]);

  /* scroll position -> which frame of the playlist is showing */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setIndex(Math.min(frames.length - 1, Math.floor(p * frames.length)));
        setHue(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [frames]);

  /* sections may claim their own photo via data-ambient="worship" */
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-ambient]"));
    if (!nodes.length) return;
    const visible = new Map<HTMLElement, number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target as HTMLElement, e.intersectionRatio));
        let best: HTMLElement | null = null;
        let ratio = 0.28;
        visible.forEach((r, el) => {
          if (r > ratio) {
            ratio = r;
            best = el;
          }
        });
        const key = best ? (best as HTMLElement).dataset.ambient : undefined;
        const src = key ? (img as Record<string, string>)[key] : undefined;
        setOverride(src ?? null);
      },
      { threshold: [0, 0.28, 0.5, 0.75, 1] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  const src = override ?? frames[index] ?? frames[0];
  const move = moves[(override ? frames.length + index : index) % moves.length];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={src}
          initial={{ opacity: 0, ...(reduce ? {} : move.from) }}
          animate={{ opacity: 1, ...(reduce ? {} : move.to) }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
            default: { duration: reduce ? 0 : 16, ease: "linear" },
          }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${src})` }}
        />
      </AnimatePresence>

      {/* readability scrim — light enough that the photo stays the hero */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-ambient)" }} />

      {/* gold haze that travels as you scroll, so the light keeps changing */}
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(70% 55% at ${20 + hue * 60}% ${85 - hue * 70}%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 70%)`,
        }}
      />

      {/* film grain */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,transparent_0_2px,color-mix(in_oklab,var(--foreground)_45%,transparent)_2px_3px)]" />
    </div>
  );
}

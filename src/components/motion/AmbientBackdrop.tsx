import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { img } from "@/data/site";

/**
 * AmbientBackdrop — a full-viewport photographic layer that lives behind the
 * entire site. It cross-fades as you move between routes so the imagery, not
 * the navy, is what people see first.
 */
const byRoute: { match: string; src: string }[] = [
  { match: "/about/history", src: img.campusAerial },
  { match: "/about/leadership", src: img.leaders },
  { match: "/about/mission", src: img.bgScripture },
  { match: "/about", src: img.fellowship },
  { match: "/beliefs", src: img.bgStainedGlass },
  { match: "/ministries", src: img.choir },
  { match: "/events", src: img.bgSunrise },
  { match: "/gallery", src: img.media },
  { match: "/contact", src: img.bgCampusNight },
  { match: "/join", src: img.baptism },
];

function pick(pathname: string) {
  return byRoute.find((r) => pathname.startsWith(r.match))?.src ?? img.worship;
}

export function AmbientBackdrop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [src, setSrc] = useState(() => pick(pathname));

  useEffect(() => {
    setSrc(pick(pathname));
  }, [pathname]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      </AnimatePresence>
      {/* readability scrim — light enough that the photo stays the hero */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-ambient)" }}
      />
      {/* film grain */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,transparent_0_2px,color-mix(in_oklab,var(--foreground)_45%,transparent)_2px_3px)]" />
    </div>
  );
}

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------
   CinemaGallery — a horizontal "film reel": cards tilt in 3D, drift on
   alternating axes, the active frame lights up, with a fixed backdrop,
   a frame counter and a scrub bar. Feels like scrubbing a film.
------------------------------------------------------------------- */
export function CinemaGallery({
  images,
  backdrop,
  eyebrow = "Reel",
  title,
  intro,
  height = "420vh",
}: {
  images: { src: string; alt: string; label: string }[];
  backdrop: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });

  const travel = reduce ? "0%" : `-${Math.max(images.length - 1, 1) * 30}%`;
  const x = useTransform(p, [0, 1], ["4%", travel]);
  const bgScale = useTransform(p, [0, 1], [1.15, reduce ? 1.15 : 1.32]);
  const bgX = useTransform(p, [0, 1], ["0%", reduce ? "0%" : "-6%"]);
  const barScale = useTransform(p, [0, 1], [0, 1]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={backdrop}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          style={{ scale: bgScale, x: bgX }}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_84%,transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,transparent_0_2px,color-mix(in_oklab,var(--foreground)_40%,transparent)_2px_3px)]" />

        <div className="relative flex h-full flex-col justify-center">
          <div className="px-6 sm:px-12 lg:px-20">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{intro}</p>
            )}
          </div>

          <div className="mt-10 [perspective:1400px]">
            <motion.div style={{ x }} className="flex items-center gap-8 px-6 sm:px-12 lg:px-20">
              {images.map((im, i) => (
                <Frame key={im.src + im.label} im={im} i={i} total={images.length} p={p} />
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex items-center gap-4 px-6 sm:px-12 lg:px-20">
            <span className="font-display text-xs font-bold tracking-[0.3em] text-gold">
              01 — {String(images.length).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-border">
              <motion.div
                style={{ scaleX: barScale, background: "var(--gradient-gold)" }}
                className="h-px w-full origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame({
  im,
  i,
  total,
  p,
}: {
  im: { src: string; alt: string; label: string };
  i: number;
  total: number;
  p: MotionValue<number>;
}) {
  const center = total > 1 ? i / (total - 1) : 0;
  const a = Math.max(center - 0.34, 0);
  const b = Math.min(center + 0.34, 1);

  const rotateY = useTransform(p, [a, center, b], [26, 0, -26]);
  const scale = useTransform(p, [a, center, b], [0.86, 1.04, 0.86]);
  const y = useTransform(p, [a, center, b], [i % 2 ? 46 : -46, 0, i % 2 ? -46 : 46]);
  const opacity = useTransform(p, [a, center, b], [0.45, 1, 0.45]);
  const blurN = useTransform(p, [a, center, b], [6, 0, 6]);
  const filter = useTransform(blurN, (v) => `blur(${v}px)`);
  const innerScale = useTransform(p, [a, b], [1.25, 1]);

  return (
    <motion.figure
      style={{ rotateY, scale, y, opacity, filter }}
      className="group relative w-[76vw] shrink-0 overflow-hidden rounded-[2rem] border border-gold/25 shadow-[var(--shadow-soft)] [transform-style:preserve-3d] sm:w-[44vw] lg:w-[30vw]"
    >
      <div className="overflow-hidden">
        <motion.img
          src={im.src}
          alt={im.alt}
          loading="lazy"
          width={1600}
          height={1000}
          style={{ scale: innerScale }}
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(60%_40%_at_50%_100%,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_70%)]" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <span className="font-display text-lg font-bold text-gold">{im.label}</span>
        <span className="text-xs font-bold tracking-[0.3em] text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </motion.figure>
  );
}

/* ------------------------------------------------------------------
   SplitBackdrop — one photograph cut in half; the halves part like doors
   on scroll and the content is revealed standing behind them.
------------------------------------------------------------------- */
export function SplitBackdrop({
  src,
  alt,
  eyebrow,
  title,
  body,
  height = "220vh",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  body?: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  const left = useTransform(p, [0, 0.85], ["0%", reduce ? "0%" : "-100%"]);
  const right = useTransform(p, [0, 0.85], ["0%", reduce ? "0%" : "100%"]);
  const seam = useTransform(p, [0, 0.35, 0.9], [0, 1, 0]);
  const contentOpacity = useTransform(p, [0.25, 0.6], [0, 1]);
  const contentScale = useTransform(p, [0.25, 0.7], [0.9, 1]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
          )}
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h2>
          {body && (
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{body}</p>
          )}
        </motion.div>

        <motion.div style={{ x: left }} className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-[200%] max-w-none object-cover"
          />
          <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_25%,transparent)]" />
        </motion.div>
        <motion.div style={{ x: right }} className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <img
            src={src}
            alt=""
            aria-hidden
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 right-0 h-full w-[200%] max-w-none translate-x-[-50%] object-cover"
          />
          <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_25%,transparent)]" />
        </motion.div>

        <motion.div
          style={{ opacity: seam, background: "var(--gradient-gold)" }}
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   DriftBackdrop — slow ken-burns photograph behind content that floats
   in on a soft gold haze; light on scroll cost, works anywhere.
------------------------------------------------------------------- */
export function DriftBackdrop({
  src,
  alt,
  children,
  className = "",
  tint = 0.78,
}: {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  tint?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.18, 1.08]);

  return (
    <section ref={ref} className={`relative isolate overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        width={1920}
        height={1080}
        style={{ y, scale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: `color-mix(in oklab, var(--background) ${tint * 100}%, transparent)` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative px-6 py-24 sm:px-12 lg:px-20"
      >
        {children}
      </motion.div>
    </section>
  );
}

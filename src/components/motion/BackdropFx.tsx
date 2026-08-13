import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------
   FixedBackdrop — the image stays locked while the section slides over it
   (true "window into the world" effect + film grain + gold vignette)
------------------------------------------------------------------- */
export function FixedBackdrop({
  src,
  alt,
  children,
  className = "",
  overlay = 0.72,
}: {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  overlay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, 0]);

  return (
    <section ref={ref} className={`relative isolate overflow-hidden ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `color-mix(in oklab, var(--background) ${overlay * 100}%, transparent)` }}
      />
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,transparent_0_2px,color-mix(in_oklab,var(--foreground)_40%,transparent)_2px_3px)]" />
      <div className="relative px-6 py-28 sm:px-12 lg:px-20">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------
   TextMaskImage — giant display type with the photograph living inside
   the letters, panning slowly as you scroll
------------------------------------------------------------------- */
export function TextMaskImage({
  src,
  text,
  sub,
}: {
  src: string;
  text: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pos = useTransform(scrollYProgress, [0, 1], ["50% 0%", reduce ? "50% 0%" : "50% 100%"]);
  const size = useTransform(scrollYProgress, [0, 1], ["160%", reduce ? "160%" : "125%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-24 text-center sm:px-12">
      <motion.h2
        initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: EASE }}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: pos,
          backgroundSize: size,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        className="font-display text-[18vw] font-extrabold leading-[0.85] tracking-tight sm:text-[15vw]"
      >
        {text}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {sub}
        </motion.p>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------
   ZoomThroughBackdrop — you fly *through* the photo: it zooms past the
   viewer and dissolves, leaving the content standing in its place
------------------------------------------------------------------- */
export function ZoomThroughBackdrop({
  src,
  alt,
  eyebrow,
  title,
  body,
  height = "250vh",
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
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const scale = useTransform(p, [0, 1], [1, reduce ? 1 : 3.2]);
  const imgOpacity = useTransform(p, [0, 0.55, 0.85], [1, 0.85, 0]);
  const imgBlur = useTransform(p, [0.4, 0.9], [0, 22]);
  const imgFilter = useTransform(imgBlur, (b) => `blur(${b}px)`);
  const ringScale = useTransform(p, [0, 1], [0.6, 2.4]);
  const ringOpacity = useTransform(p, [0, 0.4, 0.9], [0, 0.35, 0]);

  const contentOpacity = useTransform(p, [0.45, 0.75], [0, 1]);
  const contentY = useTransform(p, [0.45, 0.8], [60, 0]);
  const contentScale = useTransform(p, [0.45, 0.8], [0.92, 1]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          width={1920}
          height={1080}
          style={{ scale, opacity: imgOpacity, filter: imgFilter }}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_45%,transparent)]" />
        <motion.div
          style={{ scale: ringScale, opacity: ringOpacity }}
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
        />
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
          className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
          )}
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h2>
          {body && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{body}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   SpotlightPanel — photo card that stays dim until the cursor lights it
------------------------------------------------------------------- */
export function SpotlightPanel({
  src,
  title,
  text,
  className = "",
}: {
  src: string;
  title: string;
  text: string;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative isolate overflow-hidden rounded-3xl border border-border ${className}`}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 size-full scale-105 object-cover transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_80%,transparent)] transition-opacity duration-500 group-hover:opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(28% 40% at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative p-8">
        <h3 className="font-display text-2xl font-extrabold text-gold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   BlindsReveal — background photo uncovered by vertical slats
------------------------------------------------------------------- */
export function BlindsReveal({
  src,
  alt,
  children,
  slats = 8,
  height = "180vh",
}: {
  src: string;
  alt: string;
  children: ReactNode;
  slats?: number;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--background)_55%,transparent)]" />
        <div className="absolute inset-0 flex">
          {Array.from({ length: slats }, (_, i) => (
            <Slat key={i} i={i} total={slats} progress={p} />
          ))}
        </div>
        <div className="relative flex h-full items-center px-6 sm:px-12 lg:px-20">{children}</div>
      </div>
    </div>
  );
}

function Slat({
  i,
  total,
  progress,
}: {
  i: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const start = (i / total) * 0.5;
  const end = Math.min(start + 0.45, 1);
  const scaleY = useTransform(progress, [start, end], [1, 0]);
  return (
    <motion.div
      style={{ scaleY, width: `${100 / total}%`, transformOrigin: i % 2 ? "bottom" : "top" }}
      className="h-full bg-background"
    />
  );
}

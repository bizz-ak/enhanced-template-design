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

/* deterministic pseudo random so SSR + client match */
function rand(i: number, salt = 1) {
  const x = Math.sin((i + 1) * 12.9898 * salt) * 43758.5453;
  return x - Math.floor(x);
}

/* ---------------------------------------------------------------- Parallax */
export function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 18,
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${reduce ? 0 : strength}%`, `${reduce ? 0 : strength}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.25, 1.15]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        width={1600}
        height={1000}
        style={{ y, scale }}
        className="size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_35%,var(--background)_130%)] opacity-70" />
    </div>
  );
}

/* --------------------------------------------------------- Curtain / clip */
export function CurtainImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.25"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.5 });
  const clip = useTransform(p, (v) =>
    reduce ? "inset(0% 0% 0% 0%)" : `inset(${(1 - v) * 45}% ${(1 - v) * 8}% ${(1 - v) * 45}% ${(1 - v) * 8}% round 24px)`,
  );
  const scale = useTransform(p, [0, 1], [reduce ? 1 : 1.25, 1]);

  return (
    <div ref={ref} className={`overflow-hidden rounded-3xl ${className}`}>
      <motion.div style={{ clipPath: clip }} className="size-full">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          width={1600}
          height={1000}
          style={{ scale }}
          className="size-full object-cover"
        />
      </motion.div>
    </div>
  );
}

/* --------------------------------------------------------------- Pinned */
export function PinnedScene({
  src,
  alt,
  eyebrow,
  title,
  lines,
  height = "300vh",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  lines: string[];
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.35]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const veil = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.6, 0.85]);
  const barW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          width={1600}
          height={1000}
          style={{ scale, y: imgY }}
          className="absolute inset-0 size-full object-cover"
        />
        <motion.div className="absolute inset-0 bg-background" style={{ opacity: veil }} />
        <div className="relative flex h-full flex-col justify-center px-6 sm:px-12 lg:px-20">
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
          )}
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h2>
          <div className="mt-8 max-w-xl space-y-5">
            {lines.map((line, i) => (
              <PinnedLine key={i} progress={scrollYProgress} index={i} total={lines.length}>
                {line}
              </PinnedLine>
            ))}
          </div>
          <div className="mt-10 h-px w-56 max-w-full bg-border">
            <motion.div style={{ width: barW }} className="h-px bg-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PinnedLine({
  progress,
  index,
  total,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: ReactNode;
}) {
  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  const start = clamp01(0.12 + (index / total) * 0.5);
  const stops = [start, start + 0.1, start + 0.25, start + 0.32].map(clamp01);
  const opacity = useTransform(progress, stops, [0, 1, 1, 0.25]);
  const y = useTransform(progress, [start, clamp01(start + 0.12)], [40, 0]);
  const blur = useTransform(progress, [start, clamp01(start + 0.12)], [8, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <motion.p style={{ opacity, y, filter }} className="text-lg leading-relaxed text-muted-foreground">
      {children}
    </motion.p>
  );
}

/* ------------------------------------------------- Shatter (breaks apart) */
export function ShatterImage({
  src,
  alt,
  cols = 6,
  rows = 4,
  height = "260vh",
  caption,
  title,
  body,
  children,
}: {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
  height?: string;
  caption?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const tiles = Array.from({ length: cols * rows }, (_, i) => i);

  // Content revealed behind the image as the pieces spread out
  const contentOpacity = useTransform(p, [0.3, 0.55, 0.95], [0, 1, 1]);
  const contentY = useTransform(p, [0.3, 0.6], [50, 0]);
  const contentBlur = useTransform(p, [0.3, 0.6], [14, 0]);
  const contentFilter = useTransform(contentBlur, (b) => `blur(${b}px)`);
  const contentScale = useTransform(p, [0.3, 0.6], [0.94, 1]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, filter: contentFilter, scale: contentScale }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center px-6"
        >
          <div className="max-w-2xl text-center">
            {children ?? (
              <>
                <h3 className="font-display text-3xl font-bold text-foreground md:text-5xl">
                  {title ?? caption ?? alt}
                </h3>
                {body && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p>}
              </>
            )}
          </div>
        </motion.div>

        <div className="relative z-10 aspect-[16/10] w-full max-w-5xl">
          <span className="sr-only">{alt}</span>
          {tiles.map((i) => (
            <Tile key={i} i={i} cols={cols} rows={rows} src={src} progress={p} mode="shatter" />
          ))}
        </div>
        {caption && (
          <p className="pointer-events-none absolute bottom-10 left-0 right-0 z-20 text-center text-xs uppercase tracking-[0.4em] text-gold">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

/* --------------------------------------- Assemble (pieces form the image) */
export function AssembleImage({
  src,
  alt,
  cols = 6,
  rows = 4,
  height = "260vh",
  caption,
  title,
  body,
  children,
}: {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
  height?: string;
  caption?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const tiles = Array.from({ length: cols * rows }, (_, i) => i);

  // Content is visible first, then the assembling image covers it
  const contentOpacity = useTransform(p, [0, 0.28, 0.55], [1, 1, 0]);
  const contentY = useTransform(p, [0.28, 0.6], [0, -40]);
  const contentBlur = useTransform(p, [0.28, 0.6], [0, 14]);
  const contentFilter = useTransform(contentBlur, (b) => `blur(${b}px)`);
  const contentScale = useTransform(p, [0.28, 0.6], [1, 0.94]);

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, filter: contentFilter, scale: contentScale }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center px-6"
        >
          <div className="max-w-2xl text-center">
            {children ?? (
              <>
                <h3 className="font-display text-3xl font-bold text-foreground md:text-5xl">
                  {title ?? caption ?? alt}
                </h3>
                {body && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{body}</p>}
              </>
            )}
          </div>
        </motion.div>

        <div className="relative z-10 aspect-[16/10] w-full max-w-5xl">
          <span className="sr-only">{alt}</span>
          {tiles.map((i) => (
            <Tile key={i} i={i} cols={cols} rows={rows} src={src} progress={p} mode="assemble" />
          ))}
        </div>
        {caption && (
          <p className="pointer-events-none absolute bottom-10 left-0 right-0 z-20 text-center text-xs uppercase tracking-[0.4em] text-gold">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}


function Tile({
  i,
  cols,
  rows,
  src,
  progress,
  mode,
}: {
  i: number;
  cols: number;
  rows: number;
  src: string;
  progress: MotionValue<number>;
  mode: "shatter" | "assemble";
}) {
  const reduce = useReducedMotion();
  const col = i % cols;
  const row = Math.floor(i / cols);
  const cx = (col + 0.5) / cols - 0.5;
  const cy = (row + 0.5) / rows - 0.5;
  const spread = 140 + rand(i, 3) * 220;
  const dx = cx * spread + (rand(i, 1) - 0.5) * 80;
  const dy = cy * spread + (rand(i, 2) - 0.5) * 80;
  const rot = (rand(i, 4) - 0.5) * 70;
  const delay = rand(i, 5) * 0.25;

  const from = mode === "shatter" ? 0.18 + delay : 0.1 + delay;
  const to = from + 0.5;

  const range: [number, number] = [from, to];
  const outA = mode === "shatter" ? [0, dx] : [dx, 0];
  const outB = mode === "shatter" ? [0, dy] : [dy, 0];
  const outR = mode === "shatter" ? [0, rot] : [rot, 0];
  const outO = mode === "shatter" ? [1, 0.15] : [0.15, 1];
  const outS = mode === "shatter" ? [1, 0.75] : [0.75, 1];

  const x = useTransform(progress, range, reduce ? [0, 0] : (outA as number[]));
  const y = useTransform(progress, range, reduce ? [0, 0] : (outB as number[]));
  const rotate = useTransform(progress, range, reduce ? [0, 0] : (outR as number[]));
  const opacity = useTransform(progress, range, reduce ? [1, 1] : (outO as number[]));
  const scale = useTransform(progress, range, reduce ? [1, 1] : (outS as number[]));

  return (
    <motion.div
      aria-hidden
      style={{
        x,
        y,
        rotate,
        opacity,
        scale,
        position: "absolute",
        left: `${(col / cols) * 100}%`,
        top: `${(row / rows) * 100}%`,
        width: `${100 / cols}%`,
        height: `${100 / rows}%`,
        backgroundImage: `url(${src})`,
        backgroundSize: `${cols * 100}% ${rows * 100}%`,
        backgroundPosition: `${(col / Math.max(cols - 1, 1)) * 100}% ${(row / Math.max(rows - 1, 1)) * 100}%`,
      }}
    />
  );
}

/* ------------------------------------------------- Directional text reveal */
export function FromBelow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 90, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function FromAbove({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -90, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function FromSide({
  children,
  className,
  dir = "left",
}: {
  children: ReactNode;
  className?: string;
  dir?: "left" | "right";
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: dir === "left" ? -80 : 80, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------- Horizontal gallery */
export function ScrollGallery({
  images,
  height = "300vh",
}: {
  images: { src: string; alt: string; label: string }[];
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", reduce ? "2%" : "-72%"]);
  const smooth = useSpring(x, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} style={{ height }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x: smooth }} className="flex gap-6 px-6">
          {images.map((img) => (
            <figure
              key={img.src + img.label}
              className="glass-panel hover-lift group relative w-[78vw] shrink-0 overflow-hidden rounded-3xl sm:w-[46vw] lg:w-[34vw]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1600}
                height={1000}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,var(--background),transparent)] px-5 py-4 text-sm font-semibold text-gold">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- Scroll progress */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, background: "var(--gradient-gold)" }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
    />
  );
}

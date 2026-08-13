import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Users, Sparkles, CalendarDays, Music, HandHeart } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { SiteSidebar } from "@/components/SiteSidebar";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import heroImage from "@/assets/campus-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TUCASA Nyerere Campus UDSM | Adventist Student Association" },
      {
        name: "description",
        content:
          "TUCASA Nyerere Campus UDSM — a vibrant Adventist student community at the University of Dar es Salaam. Grow in faith, service and lasting friendships.",
      },
      { property: "og:title", content: "TUCASA Nyerere Campus UDSM" },
      {
        property: "og:description",
        content:
          "Join the Tanzania University and College Adventist Student Association at Nyerere Campus, UDSM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    title: "FAITH",
    icon: Sparkles,
    text: "Weekly worship, Bible study and prayer bands that keep your walk with God alive through every semester.",
  },
  {
    title: "COMMUNITY",
    icon: Users,
    text: "A family away from home — mentorship, study groups and friendships built on shared values.",
  },
  {
    title: "SERVICE",
    icon: HeartHandshake,
    text: "Outreach, community projects and mission trips that put our faith into practical action.",
  },
];

const activities = [
  { title: "Friday Vespers", icon: Music, text: "Songs, testimonies and the Word every Friday evening." },
  { title: "Sabbath School", icon: CalendarDays, text: "Discussion-led lessons every Sabbath morning." },
  { title: "Outreach Sundays", icon: HandHeart, text: "Visits, donations and campus-wide service days." },
];

const stats = [
  { value: "500+", label: "Active members" },
  { value: "12", label: "Ministries" },
  { value: "40+", label: "Events yearly" },
  { value: "1979", label: "Since" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.15]);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row-reverse">
      <SiteSidebar />

      <main className="min-w-0 flex-1">
        <section ref={heroRef} className="relative overflow-hidden">
          <motion.img
            src={heroImage}
            alt="University of Dar es Salaam campus building at golden hour"
            width={1920}
            height={1200}
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative px-6 py-24 sm:px-12 lg:px-16 lg:py-32"
          >
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            >
              {[
                <h1 key="h" className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
                  <span className="text-gradient-gold block">TUCASA</span>
                  <span className="block">Nyerere Campus UDSM</span>
                </h1>,
                <p key="s" className="mt-5 text-lg font-medium text-muted-foreground">
                  Tanzania University and College Adventist Student Association
                </p>,
                <p key="b" className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Join our vibrant community of Adventist students at the University of Dar es
                  Salaam. Connect with fellow believers, grow spiritually, and make meaningful
                  friendships that will last a lifetime.
                </p>,
                <div key="c" className="mt-9 flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="rounded-lg bg-success px-7 py-3.5 font-semibold text-success-foreground shadow-[var(--shadow-soft)]"
                  >
                    Join TUCASA Today
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="rounded-lg border border-border bg-surface px-7 py-3.5 font-semibold backdrop-blur hover:border-gold/60 hover:text-gold"
                  >
                    Learn More
                  </motion.button>
                </div>,
              ].map((child, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.75, ease }}
                >
                  {child}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <h2 className="text-center font-display text-4xl font-extrabold text-gold">
              Why Join TUCASA?
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.title} className="glass-panel group rounded-2xl p-8 text-center">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mx-auto grid size-14 place-items-center rounded-full bg-surface-2"
                >
                  <p.icon className="size-6 text-gold" aria-hidden />
                </motion.div>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-wide text-gold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="px-6 pb-4 sm:px-12 lg:px-16">
          <Reveal className="glass-panel grid grid-cols-2 gap-6 rounded-2xl p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="text-center"
              >
                <p className="font-display text-3xl font-extrabold text-gold">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </Reveal>
        </section>

        <section className="px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">What happens each week</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {activities.map((a) => (
              <StaggerItem
                key={a.title}
                className="rounded-2xl border border-border bg-surface-2 p-6"
              >
                <a.icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="px-6 pb-24 sm:px-12 lg:px-16">
          <Reveal className="glass-panel rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display text-3xl font-extrabold text-gold">
              Ready to belong somewhere?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Membership is open to every student at Nyerere Campus. Come as you are.
            </p>
            <motion.button
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="mt-7 rounded-lg px-8 py-3.5 font-bold text-gold-foreground"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Join TUCASA Today
            </motion.button>
          </Reveal>
        </section>

        <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground sm:px-12 lg:px-16">
          © {new Date().getFullYear()} TUCASA Nyerere Campus, University of Dar es Salaam.
        </footer>
      </main>
    </div>
  );
}

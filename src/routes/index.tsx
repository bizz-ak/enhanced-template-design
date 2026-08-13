import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Users, Sparkles, CalendarDays, Music, HandHeart } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import {
  PinnedScene,
  ShatterImage,
  AssembleImage,
  ScrollGallery,
  CurtainImage,
  FromBelow,
  FromAbove,
  FromSide,
} from "@/components/motion/ScrollFx";
import {
  FixedBackdrop,
  TextMaskImage,
  ZoomThroughBackdrop,
  SpotlightPanel,
  BlindsReveal,
} from "@/components/motion/BackdropFx";
import { img, galleryImages, ministries } from "@/data/site";
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
    <PageShell>
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
                <Link to="/join">
                  <motion.span
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="block rounded-lg bg-success px-7 py-3.5 font-semibold text-success-foreground shadow-[var(--shadow-soft)]"
                  >
                    Join TUCASA Today
                  </motion.span>
                </Link>
                <Link to="/about">
                  <motion.span
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="block rounded-lg border border-border bg-surface px-7 py-3.5 font-semibold backdrop-blur hover:border-gold/60 hover:text-gold"
                  >
                    Learn More
                  </motion.span>
                </Link>
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

      {/* pieces flying in to form one picture */}
      <AssembleImage
        src={img.worship}
        alt="Students worshipping together during Friday vespers"
        caption="Worship · Nyerere Campus"
        title="Many pieces, one worship"
        body="Different courses, regions and languages — yet every Friday evening the pieces come together into one congregation of students."
      />

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

      <PinnedScene
        src={img.bibleStudy}
        alt="Students studying the Bible together on the campus lawn"
        eyebrow="Our rhythm"
        title="A whole week built around growing in Christ"
        lines={[
          "Mornings begin with prayer bands in every hall of residence before the first lecture.",
          "Midweek we open the Word together — honest questions, honest answers, real conviction.",
          "Friday evening the campus slows down and we welcome the Sabbath with song.",
          "Sabbath is family: worship, a shared meal, and service in the community.",
        ]}
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FromSide dir="left">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Music ministry</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold">Voices that carry the message</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our choir and instrumentalists lead campus worship, record original Swahili gospel
              music and travel to churches across Dar es Salaam.
            </p>
            <Link
              to="/ministries/$slug"
              params={{ slug: "music" }}
              className="underline-sweep mt-6 inline-block font-semibold text-gold"
            >
              Explore the choir →
            </Link>
          </FromSide>
          <CurtainImage src={img.choir} alt="TUCASA choir singing on stage" className="aspect-[4/3]" />
        </div>
      </section>

      {/* image that breaks apart as you scroll */}
      <ShatterImage
        src={img.outreach}
        alt="Students distributing food and clothing during a community outreach"
        caption="Service · Beyond the campus gate"
        title="Faith that leaves the campus"
        body="What we receive in worship we carry outside: food drives, hospital visits, free tutoring and community health days across Dar es Salaam."
      />

      <section className="px-6 pb-4 sm:px-12 lg:px-16">
        <Reveal className="glass-panel grid grid-cols-2 gap-6 rounded-2xl p-8 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="text-center"
            >
              <p className="font-display text-4xl font-extrabold text-gradient-gold">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <FromAbove>
          <h2 className="text-center font-display text-4xl font-extrabold text-gold">
            Life Every Week
          </h2>
        </FromAbove>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <StaggerItem key={a.title} className="glass-panel hover-lift rounded-2xl p-7">
              <a.icon className="size-6 text-gold" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-6">
        <FromBelow className="px-6 sm:px-12 lg:px-16">
          <h2 className="font-display text-4xl font-extrabold text-gold">Moments from campus</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Scroll to travel through a year of worship, service and friendship.
          </p>
        </FromBelow>
        <ScrollGallery images={galleryImages.slice(0, 8)} />
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">Find your ministry</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.slice(0, 6).map((m) => (
            <StaggerItem key={m.slug} className="glass-panel hover-lift overflow-hidden rounded-2xl">
              <Link to="/ministries/$slug" params={{ slug: m.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gold">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.tagline}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}

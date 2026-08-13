import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Users, Sparkles, CalendarDays, Music, HandHeart } from "lucide-react";
import { SiteSidebar } from "@/components/SiteSidebar";
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

function Index() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row-reverse">
      <SiteSidebar />

      <main className="min-w-0 flex-1">
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="University of Dar es Salaam campus building at golden hour"
            width={1920}
            height={1200}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
            <div className="max-w-2xl animate-rise">
              <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
                <span className="text-gradient-gold block">TUCASA</span>
                <span className="block">Nyerere Campus UDSM</span>
              </h1>
              <p className="mt-5 text-lg font-medium text-muted-foreground">
                Tanzania University and College Adventist Student Association
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Join our vibrant community of Adventist students at the University of Dar es
                Salaam. Connect with fellow believers, grow spiritually, and make meaningful
                friendships that will last a lifetime.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <button className="rounded-lg bg-success px-7 py-3.5 font-semibold text-success-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  Join TUCASA Today
                </button>
                <button className="rounded-lg border border-border bg-surface px-7 py-3.5 font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:text-gold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-12 lg:px-16">
          <h2 className="text-center font-display text-4xl font-extrabold text-gold">
            Why Join TUCASA?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="glass-panel hover-lift group rounded-2xl p-8 text-center"
              >
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-surface-2 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="size-6 text-gold" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-wide text-gold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-4 sm:px-12 lg:px-16">
          <div className="glass-panel grid grid-cols-2 gap-6 rounded-2xl p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center transition-transform duration-300 hover:scale-105">
                <p className="font-display text-3xl font-extrabold text-gold">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-12 lg:px-16">
          <h2 className="font-display text-3xl font-bold">What happens each week</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {activities.map((a) => (
              <article
                key={a.title}
                className="hover-lift rounded-2xl border border-border bg-surface-2 p-6"
              >
                <a.icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-12 lg:px-16">
          <div className="glass-panel rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display text-3xl font-extrabold text-gold">
              Ready to belong somewhere?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Membership is open to every student at Nyerere Campus. Come as you are.
            </p>
            <button
              className="mt-7 rounded-lg px-8 py-3.5 font-bold text-gold-foreground transition-all duration-300 hover:-translate-y-1"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Join TUCASA Today
            </button>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground sm:px-12 lg:px-16">
          © {new Date().getFullYear()} TUCASA Nyerere Campus, University of Dar es Salaam.
        </footer>
      </main>
    </div>
  );
}

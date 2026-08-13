import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PinnedScene, CurtainImage, FromSide, FromBelow } from "@/components/motion/ScrollFx";
import { FixedBackdrop, SpotlightPanel } from "@/components/motion/BackdropFx";
import { img, ministries } from "@/data/site";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About TUCASA | Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Who we are: an Adventist student family at Nyerere Campus, UDSM — our story, mission, ministries and leadership.",
      },
      { property: "og:title", content: "About TUCASA Nyerere Campus" },
      {
        property: "og:description",
        content: "Our story, mission and the ministries that shape student life at UDSM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const subpages = [
  { to: "/about/history", label: "Our History", text: "From a handful of students under a tree to 500+ members." },
  { to: "/about/mission", label: "Mission & Vision", text: "Why we exist and where we are heading." },
  { to: "/about/leadership", label: "Leadership", text: "The student executive and ministry leaders." },
] as const;

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title="A family of Adventist students at UDSM"
        subtitle="TUCASA Nyerere Campus exists so that no Adventist student walks the university journey alone — spiritually, academically or socially."
        image={img.campusAerial}
        imageAlt="Aerial view of the University of Dar es Salaam campus"
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <CurtainImage src={img.fellowship} alt="Students sharing a fellowship meal" className="aspect-[4/3]" />
          <FromSide dir="right">
            <h2 className="font-display text-4xl font-extrabold text-gold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are students of the University of Dar es Salaam who belong to the Seventh-day
              Adventist faith, organised as a chapter of the Tanzania University and College
              Adventist Student Association.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Together we worship, study, serve and grow — keeping faith alive in the middle of a
              demanding academic life.
            </p>
          </FromSide>
        </div>
      </section>

      <PinnedScene
        src={img.prayer}
        alt="Students praying together in a circle"
        eyebrow="Our heartbeat"
        title="Faith that survives university"
        lines={[
          "We believe a student can excel academically without losing their walk with God.",
          "Prayer bands, mentorship and accountability keep each member anchored.",
          "Every member is discipled — and then sent out to disciple someone else.",
        ]}
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">Go deeper</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {subpages.map((s) => (
            <StaggerItem key={s.to} className="glass-panel hover-lift rounded-2xl p-7">
              <Link to={s.to} className="block">
                <h3 className="font-display text-xl font-bold text-gold">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <span className="underline-sweep mt-4 inline-block text-sm font-semibold">Read more →</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold">Our ministries</h2>
        </Reveal>
        <Stagger className="mt-8 flex flex-wrap gap-3">
          {ministries.map((m) => (
            <StaggerItem key={m.slug}>
              <Link
                to="/ministries/$slug"
                params={{ slug: m.slug }}
                className="glass-panel inline-block rounded-full px-5 py-2 text-sm font-semibold transition-colors hover:text-gold"
              >
                {m.name}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <FixedBackdrop src={img.bgCampusNight} alt="Nyerere Campus at night">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-gold">
            Our campus, our calling
          </p>
          <h2 className="mt-6 text-center font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            A light that does not go out when the lectures end
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <SpotlightPanel
              src={img.worship}
              title="Worship"
              text="Vespers, Sabbath school and campus-wide services that keep Christ at the centre of student life."
            />
            <SpotlightPanel
              src={img.outreach}
              title="Service"
              text="Health days, tutoring and community projects across Dar es Salaam every semester."
            />
            <SpotlightPanel
              src={img.leaders}
              title="Leadership"
              text="Student leaders mentored to serve the church and the nation long after graduation."
            />
          </div>
        </div>
      </FixedBackdrop>

    </PageShell>
  );
}

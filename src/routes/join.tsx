import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { AssembleImage, FromBelow } from "@/components/motion/ScrollFx";
import { img, ministries } from "@/data/site";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join TUCASA | Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Become part of TUCASA Nyerere Campus — register as a member, choose a ministry and find your family at UDSM.",
      },
      { property: "og:title", content: "Join TUCASA Nyerere Campus" },
      { property: "og:description", content: "Three simple steps to belong to our Adventist student family." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});

const steps = [
  { n: "01", title: "Come to a service", text: "Start at Friday vespers or Sabbath worship — just show up, you are expected." },
  { n: "02", title: "Register as a member", text: "Fill the membership form at the welcome desk or with any executive member." },
  { n: "03", title: "Pick a ministry", text: "Choose where you will serve, and get connected to a prayer band in your hall." },
];

function JoinPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join us"
        title="There is a place here for you"
        subtitle="Membership is open to every student at the University of Dar es Salaam. No forms needed to be welcomed — only to be counted."
        image={img.fellowship}
        imageAlt="Students welcoming a new member"
      />

      <AssembleImage src={img.leaders} alt="TUCASA members together" caption="You belong here" />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">How to join</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.n} className="glass-panel hover-lift rounded-2xl p-8">
              <p className="font-display text-4xl font-extrabold text-gradient-gold">{s.n}</p>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-3xl font-extrabold">Choose a ministry to start with</h2>
        </FromBelow>
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
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-lg px-7 py-3.5 font-bold text-gold-foreground"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Talk to a leader
        </Link>
      </section>
    </PageShell>
  );
}

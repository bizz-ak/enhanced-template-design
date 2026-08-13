import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CurtainImage, FromSide } from "@/components/motion/ScrollFx";
import { img, leadership } from "@/data/site";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "Meet the student executive committee and ministry leaders serving TUCASA Nyerere Campus, UDSM.",
      },
      { property: "og:title", content: "TUCASA Leadership Team" },
      { property: "og:description", content: "The student executive and ministry leaders serving our community." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Leadership"
        title="Servants first, leaders second"
        subtitle="TUCASA is led by students, guided by the campus chaplaincy and accountable to its members."
        image={img.leaders}
        imageAlt="Student leadership team standing together"
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FromSide dir="left">
            <h2 className="font-display text-4xl font-extrabold text-gold">How we are organised</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              An executive committee is elected each academic year, supported by departmental
              leaders who run the day-to-day ministries. Elections are open to all registered
              members.
            </p>
          </FromSide>
          <CurtainImage src={img.media} alt="Media team at work during a service" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-16">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((l) => (
            <StaggerItem key={l.role} className="glass-panel hover-lift rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{l.role}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{l.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}

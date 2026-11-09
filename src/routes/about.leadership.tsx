import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CurtainImage, FromSide } from "@/components/motion/ScrollFx";
import { img } from "@/data/site";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "How TUCASA Nyerere Campus, UDSM is led: an executive committee elected each academic year and departmental leaders serving the student family.",
      },
      { property: "og:title", content: "TUCASA Leadership" },
      {
        property: "og:description",
        content: "Led by students, guided by the campus chaplaincy and accountable to its members.",
      },
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

      <section className="px-6 py-24 sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FromSide dir="left">
            <h2 className="font-display text-4xl font-extrabold text-gold">How we are organised</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              An executive committee is elected each academic year, supported by departmental
              leaders who run the day-to-day ministries. Elections are open to all registered
              members.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Leadership here is a season of service — one academic year to carry the ministry
              forward and hand it on stronger.
            </p>
          </FromSide>
          <CurtainImage src={img.media} alt="Media team at work during a service" className="aspect-[4/3]" />
        </div>
      </section>
    </PageShell>
  );
}

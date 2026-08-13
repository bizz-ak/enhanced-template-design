import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, PageHero } from "@/components/PageShell";
import { AssembleImage, FromSide, FromBelow } from "@/components/motion/ScrollFx";
import { img, timeline } from "@/data/site";

export const Route = createFileRoute("/about/history")({
  head: () => ({
    meta: [
      { title: "Our History | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "From a handful of students meeting under a tree in 1979 to a family of over 500 members — the story of TUCASA at Nyerere Campus.",
      },
      { property: "og:title", content: "The story of TUCASA Nyerere Campus" },
      { property: "og:description", content: "Four decades of faith, service and student ministry at UDSM." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our history"
        title="Four decades under one tree, then a campus"
        subtitle="What began as a small circle of praying students has grown into one of the most active student associations at the University of Dar es Salaam."
        image={img.campusAerial}
        imageAlt="Campus at sunset"
      />

      <AssembleImage
        src={img.leaders}
        alt="Student leaders gathered together"
        caption="Generations of student leaders"
        title="Built by students, kept by grace"
        body="From a handful of Adventist students meeting under a tree in the 1980s, every generation has handed over the same trust: keep the Word central, keep the door open, keep serving Dar es Salaam."
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">Milestones</h2>
        </FromBelow>
        <ol className="relative mt-12 space-y-12 border-l border-border pl-8">
          {timeline.map((t, i) => (
            <li key={t.year} className="relative">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                className="absolute -left-[41px] top-2 size-4 rounded-full border-2 border-gold bg-background"
              />
              <FromSide dir={i % 2 === 0 ? "left" : "right"}>
                <p className="font-display text-2xl font-extrabold text-gradient-gold">{t.year}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{t.text}</p>
              </FromSide>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}

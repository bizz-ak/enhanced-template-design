import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Compass } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PinnedScene, FromBelow } from "@/components/motion/ScrollFx";
import { img } from "@/data/site";

export const Route = createFileRoute("/about/mission")({
  head: () => ({
    meta: [
      { title: "Mission & Vision | TUCASA Nyerere Campus" },
      {
        name: "description",
        content:
          "The mission, vision and core values guiding TUCASA Nyerere Campus at the University of Dar es Salaam.",
      },
      { property: "og:title", content: "TUCASA Mission & Vision" },
      { property: "og:description", content: "Living the mission, reaching the nations — our guiding purpose." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MissionPage,
});

const cards = [
  {
    icon: Target,
    title: "Mission",
    text: "To nurture Adventist students at UDSM into Christ-centred scholars who serve the campus, the church and the nation.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Every student on Nyerere Campus reached with the everlasting gospel, and every Adventist student anchored in faith.",
  },
  {
    icon: Compass,
    title: "Motto",
    text: "Living the Mission, Reaching the Nations.",
  },
];

const values = [
  { title: "Scripture first", text: "Every programme is measured against the Word of God." },
  { title: "Excellence", text: "Academic diligence is part of our worship." },
  { title: "Integrity", text: "Transparent leadership and honest stewardship." },
  { title: "Compassion", text: "No student left behind — spiritually or materially." },
  { title: "Unity", text: "Many tribes and faculties, one family in Christ." },
  { title: "Mission", text: "We exist to be sent, not to be comfortable." },
];

function MissionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Mission & vision"
        title="Living the Mission, Reaching the Nations"
        subtitle="Our purpose is simple: help students meet Jesus, grow deep, and go out."
        image={img.crusade}
        imageAlt="Students at an evening evangelistic meeting"
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <StaggerItem key={c.title} className="glass-panel hover-lift rounded-2xl p-8">
              <c.icon className="size-7 text-gold" aria-hidden />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-gold">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <PinnedScene
        src={img.baptism}
        alt="A baptism at sunrise by the ocean"
        eyebrow="The goal"
        title="Lives changed, one student at a time"
        lines={[
          "Every programme we run is aimed at a decision for Christ.",
          "Every decision is followed by discipleship, not applause.",
          "Every disciple is trained to lead the next generation of students.",
        ]}
      />

      <section className="px-6 py-20 pb-24 sm:px-12 lg:px-16">
        <FromBelow>
          <h2 className="font-display text-4xl font-extrabold text-gold">Core values</h2>
        </FromBelow>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title} className="glass-panel hover-lift rounded-2xl p-7">
              <h3 className="font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </PageShell>
  );
}

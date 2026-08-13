import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CurtainImage, FromSide } from "@/components/motion/ScrollFx";
import { SplitBackdrop } from "@/components/motion/CinemaFx";
import { img } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | TUCASA Nyerere Campus UDSM" },
      {
        name: "description",
        content:
          "Reach TUCASA Nyerere Campus at the University of Dar es Salaam — location, worship times and how to get in touch.",
      },
      { property: "og:title", content: "Contact TUCASA Nyerere Campus" },
      { property: "og:description", content: "Where we meet, when we worship and how to reach the leadership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, title: "Where we meet", text: "Nyerere Campus, University of Dar es Salaam, Tanzania." },
  { icon: Clock, title: "Worship times", text: "Friday vespers 6:30 PM · Sabbath 8:30 AM – 1:00 PM" },
  { icon: Mail, title: "Email", text: "tucasa.nyerere@udsm.example" },
  { icon: Phone, title: "Phone", text: "+255 700 000 000" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Come and see"
        subtitle="Whether you are a new student, a visitor or a partner in ministry — we would love to hear from you."
        image={img.campusAerial}
        imageAlt="Campus overview at sunset"
      />

      <section className="px-6 py-20 sm:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FromSide dir="left">
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {details.map((d) => (
                <StaggerItem key={d.title} className="glass-panel hover-lift rounded-2xl p-6">
                  <d.icon className="size-6 text-gold" aria-hidden />
                  <h2 className="mt-4 font-display text-lg font-bold">{d.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </FromSide>
          <CurtainImage src={img.fellowship} alt="Students welcoming visitors" className="aspect-[4/3]" />
        </div>
      </section>

      <SplitBackdrop
        src={img.bgStainedGlass}
        alt="Light through a stained glass window"
        eyebrow="Visit us"
        title="There is a seat saved for you this Sabbath"
        body="Walk in at 8:30 AM, ask for anyone in a TUCASA badge, and you will not sit alone."
      />
    </PageShell>
  );
}
